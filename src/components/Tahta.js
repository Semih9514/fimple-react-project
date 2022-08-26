import React , { useState } from 'react';
import Kup from './Kup';

function Tahta() {

    const [kup, setKup] = useState(Array(9).fill(null));
    const [X, setX] = useState(true);

    const kazanan = kazananiHesapla(kup);
    let durum;
    if (kazanan) {
        durum = 'Kazanan: ' + kazanan;
    } else {
        durum = 'Oyun Sırası: ' + (X ? 'X' : 'O');
    }

    const renderSquare = (i) => {
        return (
            <Kup value={kup[i]} onClick={() => handleClick(i)} />
        )
    }

    const handleClick = (i) => {
        const kupler = kup.slice();
        if (kupler[i] === null) {
            kupler[i] = X ? 'X' : 'O';
            setKup(kupler);
            setX(!X);
        } else {
            alert("Zaten Seçildi")
        }

    }

    const handleRestart = (i) => {
        setKup(Array(9).fill(null));
    }

    function kazananiHesapla(kupler) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (kupler[a] && kupler[a] === kupler[b] && kupler[a] === kupler[c]) {
                return kupler[a];
            }
        }

        return null;
    }
  return (
    <div className='board'>
        <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>

        <h3>{durum}</h3>
        <button onClick={()=> handleRestart()} className='btn-play'>Tekrar Oyna</button>
    </div>
  );
}

export default Tahta;