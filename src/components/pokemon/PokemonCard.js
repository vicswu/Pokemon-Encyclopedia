import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import spinner from '../pokemon/spinner.gif'
const Sprite = styled.img`
width = 5em;
height = 5em;
display = none; `;

const Card = styled.div`
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
&:hover{
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
-moz-user-select:none;
-website-user-select:none;
user-select: none;
-o-user-select: none;}`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: white;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}`;

export default class PokemonCard extends Component {
	state = {
		name:'',
		imageUrl: '',
		pokemonIndex: '',
		imageLoading: true,
		tooManyRequests: false
	};
	componentDidMount(){
		const{name,url} = this.props;
		const pokemonIndex = url.split("/")[url.split("/").length-2];
		const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`
		this.setState({name, imageUrl, pokemonIndex})
	}
  render () {
  	const {name,url} = this.props.name;

    return(
      <div class = 'col-md-3 cl-sm-5 mb-5'> 
      <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
      	<Card class = "card">
      		
      			<h5 class = 'card-header'> {this.state.pokemonIndex} </h5>

      			{this.state.imageLoading? ( <img src = {spinner} style = {{width: '5em', height: '5em'}} class = "card-img-top rounded mx-auto d-block mt-2" />
      				):null}

      			<Sprite class = "card-img-top rounded mx-auto mt-2"
      			onLoad = {() => this.setState({imageLoading:false})}
      			onError = {() => this.setState ({tooManyRequests: true})}
      			src = {this.state.imageUrl}
      			style = {
      				this.state.tooManyRequests? {display: "none"}: 
      				this.state.imageLoading? null: {display : "block"}} />
      			{this.state.tooManyRequests?(<h6 class='mx-auto'> <span class = "badge badge-danger mt-2"> Too Many Requests </span>
      				</h6>):null}

      			<div class = "card-body mx-auto"> 
      			<h6 class = "card-title"> 
      			{this.state.name
      				.toLowerCase()
      				.split(" ")
      				.map(
      				letter => letter.charAt(0).toUpperCase()+letter.substring(1)
      				)
      				.join(" ")} 
      				</h6>
      			</div>
      		
      	</Card>
        </StyledLink>
      </div>
       );
  }
}
