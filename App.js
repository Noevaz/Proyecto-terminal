import React, { useState } from 'react';
import imagenes from './assets/imagenes';

export default function App() {
	const questions = [
		{
			questionText: 'Conoces el juego?\n\r \n\r Age of Empires',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},

		{
			questionText: 'Conoces el juego?\n\r \n\r Among Us',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Angry Birds',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Animal Crossing',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Apex Legends',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Assassins Creed',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Batman Arkham Series',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Battlefield',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Bioshock',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Bomberman',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Borderlands',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Call of Duty',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Candy Crush',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Castlevania',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Clash of Clans',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Clash Royale',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Club Penguin',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Contra',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Counter Strike',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Crash Bandicoot',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Cuphead',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Cyberpunk 2077',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Dark Souls',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Dead by Daylight',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Destiny',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Devil May Cry',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Doom',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Dragon Quest',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Fallout',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Farmville',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r FIFA',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Final Fantasy',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Five Nights at Freddys',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Flappy Bird',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r For Honor',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Fortnite',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Forza Motor',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Free Fire',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Gears of War',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Genshin Impact',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Geometry Dash',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r God of War',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r GTA',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Guitar Hero',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Half life',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Halo',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Hitman',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Injustice',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Just Dance',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r King of Fighters',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Kingdom Hearts',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r League of Legends',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Left 4 Dead',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r LEGO Game',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Mario Bros',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r MArio Kart',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Marvel vs Capcom',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Mass Effect',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Megaman',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Metal Gear',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Metal Slug',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Metro',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Metroid',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Minecraft',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Monster Hunter',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Mortal Kombat',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Need for Speed',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Outlast',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Overwatch',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Pacman',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Persona 5',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Piano Tiles',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Pikmin',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Plague Inc',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Plantas vs Zombies',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Pokemon',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Portal',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r PUBG',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Red Dead Redemption',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Resident Evil',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Roblox',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Rocket League',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Silent Hill',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Sims',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Skyrim',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Slenderman',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Smash Bros',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Sonic',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Spider-Man',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Splatoon',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Star Wars Battlefront',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Street Fighter',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Tekken',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Tetris',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r The Last of Us',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r The Legend of Zelda',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r The Walking Dead',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r The Witcher',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Tomb Raider',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Uncharted',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Viva Piñata',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Watchdogs',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r Wii Sports',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Conoces el juego?\n\r \n\r World of Warcraft',
			answerOptions: [
				{ answerText: 'Si', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},


	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Conoces {score} de {questions.length} juegos
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div 
						className='question-text'>{questions[currentQuestion].questionText}
						<img src={imagenes[0]}></img>
						</div>

					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
