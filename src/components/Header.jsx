import React, { useState } from "react";

export default function Header({ turkishFlag, englishFlag, playerScore, turkishSelection, englishSelection, tr }) {


    return (
        <div className='header'>
            <div className="mainHeader">
                <h1>{!tr ? 'HangMan Game' : 'Adam Asmaca Oyunu'}</h1>
                <p><strong>{!tr ? 'Instructions: ' : 'Talimatlar: '}</strong>{!tr ? 'Guess the hidden word one letter at a time before the hangman is fully drawn! ' : 'Gizli kelimeyi Cin Ali tamamen çizilmeden önce teker teker harfleri tahmin ederek bulmaya çalış!'}</p>
            </div>
            <div className="scoreBoard">
                <p>{!tr ? 'Select Language' : 'Dil Seç'}</p>
                <div className="languageBtns">
                    <img onClick={turkishSelection} src={turkishFlag} draggable='false' alt="" />
                    <img onClick={englishSelection} src={englishFlag} draggable='false' alt="" />
                </div>
                <p className="score">{!tr ? 'Score: ' : 'Skor: '}{playerScore}</p>
            </div>
        </div>
    )
}