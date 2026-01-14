
var one = {
    mal: document.getElementById("11"),
    status: false,
    holding: "1",
    count: 0

};
var two = {
    mal: document.getElementById("12"),
    status: false,
    holding: "2",
    count: 0
};
var three = {
    mal: document.getElementById("13"),
    status: false,
    holding: "3",
    count: 0
};
var four = {
    mal: document.getElementById("21"),
    status: false,
    holding: "4",
    count: 0
};
var five = {
    mal: document.getElementById("22"),
    status: false,
    holding: "5",
    count: 0
};
var six = {
    mal: document.getElementById("23"),
    status: false,
    holding: "6",
    count: 0
};
var seven = {
    mal: document.getElementById("31"),
    status: false,
    holding: "7",
    count: 0
};
var eight = {
    mal: document.getElementById("32"),
    status: false,
    holding: "8",
    count: 0
};
var nine = {
    mal: document.getElementById("33"),
    status: false,
    holding: "9",
    count: 0
};
let currentPlayer = 1;
let current = 'X';
let score = {
    player_X: 0,
    player_y: 0
};
let temp = 0;

let sbtn = document.getElementById("str");

sbtn.addEventListener('click', () => {

    let pvp = document.getElementsByName("play")[0].checked;
    let pvc = document.getElementsByName("play")[1].checked;

    if (pvc || pvp) {
        console.log("clicked")
        let nod = document.getElementsByClassName('start');
        nod[0].style.display = "none";

        let nod2 = document.getElementsByClassName('row');
        for (let i = 0; i < nod2.length; i++) {
            nod2[i].style.display = "flex";
        }
    }
})


let btnp = document.getElementById("btnp");
let btne = document.getElementById("btne");

btnp.addEventListener('click', () => {

    let cbz = document.getElementsByClassName("middleware");
    cbz[0].style.display = "none";

        let nod9 = document.getElementsByClassName('row');
        for (let k = 0; k < nod9.length; k++) {
            nod9[k].style.display = "flex";
        }

    let a = [one,two,three,four,five,six,seven,eight,nine];
    for (let z = 0; z < a.length; z++) {
        console.log("zzz",z)
        a[z].status=false;
        a[z].holding=z;
        a[z].count=0;
        console.log(a[z])
    }

    for (let i = 0; i < document.getElementsByClassName('x').length; i++) {
      document.getElementsByClassName('x')[i].innerHTML=" ";console.log(i);
    }
})



btne.addEventListener("click", () => {
    let cbc = document.getElementsByClassName("middleware");
    cbc[0].style.display = "none";

    document.getElementsByClassName("score")[0].style.display = "flex";
});




one.mal.addEventListener('click', () => {
    proces(current, one);
});

two.mal.addEventListener('click', () => {
    proces(current, two);
});

three.mal.addEventListener('click', () => {
    proces(current, three);
});

four.mal.addEventListener('click', () => {
    proces(current, four);
});

five.mal.addEventListener('click', () => {
    proces(current, five);
});

six.mal.addEventListener('click', () => {
    proces(current, six);
});

seven.mal.addEventListener('click', () => {
    proces(current, seven);
});

eight.mal.addEventListener('click', () => {
    proces(current, eight);
});

nine.mal.addEventListener('click', () => {
    proces(current, nine);
});

let terminate = (player, wld) => {

    let nod3 = document.getElementsByClassName('row');
    for (let i = 0; i < nod3.length; i++) {
        nod3[i].style.display = "none";
    }

    let abc = document.getElementsByClassName("middleware");
    abc[0].style.display = "flex";

    if (player==='X'&&wld==='win') {
        score.player_X=score.player_X+1;
    }else{
        score.player_y=score.player_y+1;
    }

}

let hc = () => {
    let opponent = " ";
    let withp = document.getElementsByName("play")[0].checked;
    let withc = document.getElementsByName("play")[1].checked;
    if (withc) {
        opponent = "computer";
    } else {
        opponent = "human";
    }
    return opponent;
}

async function proces(GameStatus, nom) {
    if (!nom.status) {
        let nopp = hc();
        console.log(nopp);

        nom.status = true;
        let a = document.createElement('h1');
        a.innerHTML = GameStatus;
        a.setAttribute('class', 'x');
        await nom.mal.appendChild(a);
        nom.holding = GameStatus;

        if (current === 'X') {
            current = 'O';
            temp = temp + 1;
        } else {
            current = 'X'
        }

        nom.count = temp;

        if (currentPlayer == 1) {
            currentPlayer = 0;
            if (nopp == "computer") {
                botMove();
            }
        } else {
            currentPlayer = 1;
        }
        cheak();
        console.log("space :-", nom, "current player:-", currentPlayer, "current Symbol:-", current, nom.count, temp);
    }
}
//check hota h gandu cheak kya hota h
let cheak = () => {
    if (one.holding == five.holding && five.holding == nine.holding) {
        terminate(current, "win");
        return null;
    }
    if (three.holding == five.holding && five.holding == seven.holding) {
        terminate(current, "win");
        return null;
    }
    if (one.holding == two.holding && two.holding == three.holding) {
        terminate(current, "win");
        return null;
    }
    if (four.holding == five.holding && five.holding == six.holding) {
        terminate(current, "win");
        return null;
    }
    if (seven.holding == eight.holding && eight.holding == nine.holding) {
        terminate(current, "win");
        return null;
    }
    if (one.holding == four.holding && four.holding == seven.holding) {
        terminate(current, "win");
        return null;
    }
    if (two.holding == five.holding && five.holding == eight.holding) {
        terminate(current, "win");
        return null;
    }
    if (three.holding == six.holding && six.holding == nine.holding) {
        terminate(current, "win");
        return null;
    }
    if (one.status && two.status && three.status && four.status && five.status && six.status && seven.status && eight.status && nine.status) {
        terminate(current, "draw");
        return null;
    }
}

let scoreCount = (score) => {

}

let exitt = document.getElementById('btnexit');

exitt.addEventListener('click', () => {
    document.getElementsByClassName("score")[0].style.display = "none";
    let nod = document.getElementsByClassName('start');
    nod[0].style.display = "flex";
})



//bot to tuh h laude

// function botMove() {
//     if (!hc().includes("computer")) return;

//     // 1. Win if possible
//     if (canWin('O')) return;

//     // 2. Block opponent's win
//     if (canWin('X')) return;

//     // 3. Take center if available
//     if (!five.status) {
//         proces('O', five);
//         return;
//     }

//     // 4. Take corners (good for forks)
//     const corners = [one, three, seven, nine];
//     for (let cell of corners) {
//         if (!cell.status) {
//             proces('O', cell);
//             return;
//         }
//     }

//     // 5. Last resort — take any free cell
//     const all = [one,two,three,four,five,six,seven,eight,nine];
//     for (let cell of all) {
//         if (!cell.status) {
//             proces('O', cell);
//             return;
//         }
//     }
// }

// // Returns true if played
// function canWin(player) {
//     const lines = [
//         [one, two, three],
//         [four, five, six],
//         [seven, eight, nine],
//         [one, four, seven],
//         [two, five, eight],
//         [three, six, nine],
//         [one, five, nine],
//         [three, five, seven]
//     ];

//     for (let line of lines) {
//         let count = 0;
//         let emptyCell = null;

//         for (let cell of line) {
//             if (cell.holding === player) count++;
//             if (!cell.status) emptyCell = cell;
//         }

//         if (count === 2 && emptyCell) {
//             proces('O', emptyCell);
//             return true;
//         }
//     }
//     return false;
// }


let botMove = () => {

    // User stating with one
    if (one.holding == "X" && one.count == 1) {
        proces(current, five);




        // 1-2

        if (two.holding == "X" && two.count == 2) {
            proces(current, three);
            if (seven.holding == "X" && seven.count == 3) {
                proces(current, four);
                if (six.holding == "X" && six.count == 4) {
                    proces(current, eight);
                    console.log("yahi hai")
                }
                if ((eight.holding == "X" || nine.holding == "X") && (eight.count == 4 || nine.count == 4)) {
                    proces(current, six);
                }
            }
            if ((four.holding == "X" || six.holding == "X" || eight.holding == "X" || nine.holding == "X") || (four.count == 3 || six.count == 3 || eight.count == 3 || nine.count == 3)) {
                proces(current, seven);
            }

        }


        //1-3

        if (three.holding == "X" && three.count == 2) {
            proces(current, two);
            if (eight.holding == "X" && eight.count == 3) {
                proces(current, four);
                if (six.holding == "X" && six.count == 4) {
                    proces(current, nine);
                }
                if ((seven.holding == "X" || nine.holding == "X") && (seven.count == 4 || nine.count == 4)) {
                    proces(current, six);
                }
            }
            if ((four.holding == "X" || six.holding == "X" || seven.holding == "X" || nine.holding == "X") && (four.count == 3 || six.count == 3 || seven.count == 3 || nine.count == 3)) {
                proces(current, eight);
            }
        }



        //1-4

        if (four.holding == "X" && four.count == 2) {
            proces(current, seven);
            console.log('yaha ')
            if (three.holding == "X" && three.count == 3) {
                proces(current, two);
                if (eight.holding == "X" && eight.count == 4) {
                    proces(current, nine);
                }
                if ((six.holding == "X" || nine.holding == "X") && (six.count == 4 || nine.count == 4)) {
                    proces(current, eight);
                }
            }
            if ((two.holding == "X" || six.holding == "X" || eight.holding == "X" || nine.holding == "X") && (two.count == 3 || six.count == 3 || eight.count == 3 || nine.count == 3)) {
                proces(current, three);
            }
        }



        //1-6

        if (six.holding == "X" && six.count == 2) {
            proces(current, eight);
            if (two.holding == "X" && two.count == 3) {
                proces(current, three);
                if (seven.holding == "X" && seven.count == 4) {
                    proces(current, four)
                }
                if ((four.holding == "X" || nine.holding == "X") && (four.count == 4 || nine.count == 4)) {
                    proces(current, seven);
                }
            }
            if ((three.holding == "X" || four.holding == "X" || seven.holding == "X" || nine.holding == "X") && (three.count == 3 || four.count == 3 || seven.count == 3 || nine.count == 3)) {
                proces(current, two)
            }
        }



        //1-7

        if (seven.holding == "X" && seven.count == 2) {
            proces(current, four);
            if (six.holding == "X" && six.count == 3) {
                proces(current, two);
                if (eight.holding == "X" && eight.count == 4) {
                    proces(current, nine);
                }
                if ((three.holding == "X" || nine.holding == "X") && (three.count == 4 || nine.count == 4)) {
                    proces(current, eight);
                }
            }
            if ((two.holding == "X" || eight.holding == "X" || three.holding == "X" || nine.holding == "X") && (two.count == 3 || eight.count == 3 || three.count == 3 || nine.count == 3)) {
                proces(current, six);
            }
        }



        //1-8

        if (eight.holding == "X" && eight.count == 2) {
            proces(current, six);
            if (four.holding == "X" && four.count == 3) {
                proces(current, seven);
                if (three.holding == "X" && three.count == 4) {
                    proces(current, two)
                }
                if ((two.holding == "X" || nine.holding == "X") && (two.count == 4 || nine.count == 4)) {
                    proces(current, three);
                }
            }
            if ((seven.holding == "X" || two.holding == "X" || three.holding == "X" || nine.holding == "X") && (seven.count == 3 || two.count == 3 || three.count == 3 || nine.count == 3)) {
                proces(current, four)
            }
        }



        //1-9

        if (nine.holding == "X" && nine.count == 2) {
            proces(current, two);
            if (eight.holding == "X" && eight.count == 3) {
                proces(current, seven);
                if (three.holding == "X" && three.count == 4) {
                    proces(current, six);
                }
                if ((four.holding == "X" || six.holding == "X") && (four.count == 4 || six.count == 4)) {
                    proces(current, three);
                }
            }
            if ((four.holding == "X" || six.holding == "X" || three.holding == "X" || seven.holding == "X") && (four.count == 3 || six.count == 3 || three.count == 3 || seven.count == 3)) {
                proces(current, eight);
            }
        }


    }








    //User starting with three

    if (three.holding == "X" && three.count == 1) {
        proces(current, five);



        //3-1

        if (one.holding == "X" && one.count == 2) {
            proces(current, two);
            if (eight.holding == "X" && eight.count == 3) {
                proces(current, six);
                if (four.holding == "X" && four.count == 4) {
                    proces(current, seven);
                }
                if ((nine.holding == "X" || seven.holding == "X") && (nine.count == 4 || seven.count == 4)) {
                    proces(current, four);
                }
            }
            if ((six.holding == "X" || four.holding == "X" || nine.holding == "X" || seven.holding == "X") && (six.count == 3 || four.count == 3 || nine.count == 3 || seven.count == 3)) {
                proces(current, eight);
            }
        }



        //3-2

        if (two.holding == "X" && two.count == 2) {
            proces(current, one);
            console.log('yaha ')
            if (nine.holding == "X" && nine.count == 3) {
                proces(current, six);
                if (four.holding == "X" && four.count == 4) {
                    proces(current, seven);
                }
                if ((eight.holding == "X" || seven.holding == "X") && (eight.count == 4 || seven.count == 4)) {
                    proces(current, four);
                }
            }
            if ((six.holding == "X" || eight.holding == "X" || four.holding == "X" || seven.holding == "X") && (six.count == 3 || eight.count == 3 || four.count == 3 || seven.count == 3)) {
                proces(current, nine);
            }
        }



        //3-4

        if (four.holding == "X" && four.count == 2) {
            proces(current, eight);
            if (two.holding == "X" && two.count == 3) {
                proces(current, one);
                if (nine.holding == "X" && nine.count == 4) {
                    proces(current, six)
                }
                if ((six.holding == "X" || seven.holding == "X") && (six.count == 4 || seven.count == 4)) {
                    proces(current, nine);
                }
            }
            if ((one.holding == "X" || six.holding == "X" || nine.holding == "X" || seven.holding == "X") && (one.count == 3 || six.count == 3 || nine.count == 3 || seven.count == 3)) {
                proces(current, two)
            }
        }


        //3-6

        if (six.holding == "X" && six.count == 2) {
            proces(current, nine);
            if (one.holding == "X" && one.count == 3) {
                proces(current, two);
                if (eight.holding == "X" && eight.count == 4) {
                    proces(current, four);
                    console.log("yahi hai")
                }
                if ((four.holding == "X" || seven.holding == "X") && (four.count == 4 || seven.count == 4)) {
                    proces(current, eight);
                }
            }
            if ((two.holding == "X" || eight.holding == "X" || four.holding == "X" || seven.holding == "X") || (two.count == 3 || eight.count == 3 || four.count == 3 || seven.count == 3)) {
                proces(current, one);
            }

        }


        //3-7

        if (seven.holding == "X" && seven.count == 2) {
            proces(current, six);
            if (four.holding == "X" && four.count == 3) {
                proces(current, one);
                if (nine.holding == "X" && nine.count == 4) {
                    proces(current, eight);
                }
                if ((two.holding == "X" || eight.holding == "X") && (two.count == 4 || eight.count == 4)) {
                    proces(current, nine);
                }
            }
            if ((two.holding == "X" || eight.holding == "X" || nine.holding == "X" || one.holding == "X") && (two.count == 3 || eight.count == 3 || nine.count == 3 || one.count == 3)) {
                proces(current, four);
            }
        }


        //3-8

        if (eight.holding == "X" && eight.count == 2) {
            proces(current, four);
            if (six.holding == "X" && six.count == 3) {
                proces(current, nine);
                if (one.holding == "X" && one.count == 4) {
                    proces(current, two)
                }
                if ((two.holding == "X" || seven.holding == "X") && (two.count == 4 || seven.count == 4)) {
                    proces(current, one);
                }
            }
            if ((nine.holding == "X" || two.holding == "X" || one.holding == "X" || seven.holding == "X") && (nine.count == 3 || two.count == 3 || one.count == 3 || seven.count == 3)) {
                proces(current, six)
            }
        }



        //3-9

        if (nine.holding == "X" && nine.count == 2) {
            proces(current, six);
            if (four.holding == "X" && four.count == 3) {
                proces(current, two);
                if (eight.holding == "X" && eight.count == 4) {
                    proces(current, seven);
                }
                if ((one.holding == "X" || seven.holding == "X") && (one.count == 4 || seven.count == 4)) {
                    proces(current, eight);
                }
            }
            if ((two.holding == "X" || eight.holding == "X" || one.holding == "X" || seven.holding == "X") && (two.count == 3 || eight.count == 3 || one.count == 3 || seven.count == 3)) {
                proces(current, four);
            }
        }
    }








    //User starting with seven

    if (seven.holding == "X" && seven.count == 1) {
        proces(current, five);




        //7-1

        if (one.holding == "X" && one.count == 2) {
            proces(current, four);
            if (six.holding == "X" && six.count == 3) {
                proces(current, eight);
                if (two.holding == "X" && two.count == 4) {
                    proces(current, three);
                }
                if ((nine.holding == "X" || three.holding == "X") && (nine.count == 4 || three.count == 4)) {
                    proces(current, two);
                }
            }
            if ((eight.holding == "X" || two.holding == "X" || nine.holding == "X" || three.holding == "X") && (eight.count == 3 || two.count == 3 || nine.count == 3 || three.count == 3)) {
                proces(current, six);
            }
        }


        //7-2

        if (two.holding == "X" && two.count == 2) {
            proces(current, six);
            if (four.holding == "X" && four.count == 3) {
                proces(current, one);
                if (nine.holding == "X" && nine.count == 4) {
                    proces(current, eight)
                }
                if ((eight.holding == "X" || three.holding == "X") && (eight.count == 4 || three.count == 4)) {
                    proces(current, nine);
                }
            }
            if ((one.holding == "X" || eight.holding == "X" || nine.holding == "X" || three.holding == "X") && (one.count == 3 || eight.count == 3 || nine.count == 3 || three.count == 3)) {
                proces(current, four)
            }
        }


        //7-3

        if (three.holding == "X" && three.count == 2) {
            proces(current, four);
            if (six.holding == "X" && six.count == 3) {
                proces(current, nine);
                if (one.holding == "X" && one.count == 4) {
                    proces(current, two);
                }
                if ((eight.holding == "X" || two.holding == "X") && (eight.count == 4 || two.count == 4)) {
                    proces(current, one);
                }
            }
            if ((eight.holding == "X" || two.holding == "X" || one.holding == "X" || nine.holding == "X") && (eight.count == 3 || two.count == 3 || one.count == 3 || nine.count == 3)) {
                proces(current, six);
            }
        }



        //7-4

        if (four.holding == "X" && four.count == 2) {
            proces(current, one);
            if (nine.holding == "X" && nine.count == 3) {
                proces(current, eight);
                if (two.holding == "X" && two.count == 4) {
                    proces(current, six);
                    console.log("yahi hai")
                }
                if ((six.holding == "X" || three.holding == "X") && (six.count == 4 || three.count == 4)) {
                    proces(current, two);
                }
            }
            if ((eight.holding == "X" || two.holding == "X" || six.holding == "X" || three.holding == "X") || (eight.count == 3 || two.count == 3 || six.count == 3 || three.count == 3)) {
                proces(current, nine);
            }

        }


        //7-6

        if (six.holding == "X" && six.count == 2) {
            proces(current, two);
            if (eight.holding == "X" && eight.count == 3) {
                proces(current, nine);
                if (one.holding == "X" && one.count == 4) {
                    proces(current, four)
                }
                if ((four.holding == "X" || three.holding == "X") && (four.count == 4 || three.count == 4)) {
                    proces(current, one);
                }
            }
            if ((nine.holding == "X" || four.holding == "X" || one.holding == "X" || three.holding == "X") && (nine.count == 3 || four.count == 3 || one.count == 3 || three.count == 3)) {
                proces(current, eight)
            }
        }


        //7-8

        if (eight.holding == "X" && eight.count == 2) {
            proces(current, nine);
            console.log('yaha ')
            if (one.holding == "X" && one.count == 3) {
                proces(current, four);
                if (six.holding == "X" && six.count == 4) {
                    proces(current, three);
                }
                if ((two.holding == "X" || three.holding == "X") && (two.count == 4 || three.count == 4)) {
                    proces(current, six);
                }
            }
            if ((four.holding == "X" || two.holding == "X" || six.holding == "X" || three.holding == "X") && (four.count == 3 || two.count == 3 || six.count == 3 || three.count == 3)) {
                proces(current, one);
            }
        }


        //7-9

        if (nine.holding == "X" && nine.count == 2) {
            proces(current, eight);
            if (two.holding == "X" && two.count == 3) {
                proces(current, four);
                if (six.holding == "X" && six.count == 4) {
                    proces(current, three);
                }
                if ((one.holding == "X" || three.holding == "X") && (one.count == 4 || three.count == 4)) {
                    proces(current, six);
                }
            }
            if ((four.holding == "X" || six.holding == "X" || one.holding == "X" || three.holding == "X") && (four.count == 3 || six.count == 3 || one.count == 3 || three.count == 3)) {
                proces(current, two);
            }
        }
    }







    //User starting with nine

    if (nine.holding == "X" && nine.count == 1) {
        proces(current, five);



        //9-1
        if (one.holding == "X" && one.count == 2) {
            proces(current, eight);
            if (two.holding == "X" && two.count == 3) {
                proces(current, three);
                if (seven.holding == "X" && seven.count == 4) {
                    proces(current, four);
                }
                if ((six.holding == "X" || four.holding == "X") && (six.count == 4 || four.count == 4)) {
                    proces(current, seven);
                }
            }
            if ((six.holding == "X" || four.holding == "X" || seven.holding == "X" || three.holding == "X") && (six.count == 3 || four.count == 3 || seven.count == 3 || three.count == 3)) {
                proces(current, two);
            }
        }


        //9-2

        if (two.holding == "X" && two.count == 2) {
            proces(current, four);
            if (six.holding == "X" && six.count == 3) {
                proces(current, three);
                if (seven.holding == "X" && seven.count == 4) {
                    proces(current, eight)
                }
                if ((eight.holding == "X" || one.holding == "X") && (eight.count == 4 || one.count == 4)) {
                    proces(current, seven);
                }
            }
            if ((three.holding == "X" || eight.holding == "X" || seven.holding == "X" || one.holding == "X") && (three.count == 3 || eight.count == 3 || seven.count == 3 || one.count == 3)) {
                proces(current, six)
            }
        }


        //9-3

        if (three.holding == "X" && three.count == 2) {
            proces(current, six);
            if (four.holding == "X" && four.count == 3) {
                proces(current, eight);
                if (two.holding == "X" && two.count == 4) {
                    proces(current, one);
                }
                if ((seven.holding == "X" || one.holding == "X") && (seven.count == 4 || one.count == 4)) {
                    proces(current, two);
                }
            }
            if ((eight.holding == "X" || two.holding == "X" || seven.holding == "X" || one.holding == "X") && (eight.count == 3 || two.count == 3 || seven.count == 3 || one.count == 3)) {
                proces(current, four);
            }
        }


        //9-4

        if (four.holding == "X" && four.count == 2) {
            proces(current, two);
            if (eight.holding == "X" && eight.count == 3) {
                proces(current, seven);
                if (three.holding == "X" && three.count == 4) {
                    proces(current, six)
                }
                if ((six.holding == "X" || one.holding == "X") && (six.count == 4 || one.count == 4)) {
                    proces(current, three);
                }
            }
            if ((seven.holding == "X" || six.holding == "X" || three.holding == "X" || one.holding == "X") && (seven.count == 3 || six.count == 3 || three.count == 3 || one.count == 3)) {
                proces(current, eight)
            }
        }


        //9-6

        if (six.holding == "X" && six.count == 2) {
            proces(current, three);
            console.log('yaha ')
            if (seven.holding == "X" && seven.count == 3) {
                proces(current, eight);
                if (two.holding == "X" && two.count == 4) {
                    proces(current, one);
                }
                if ((four.holding == "X" || one.holding == "X") && (four.count == 4 || one.count == 4)) {
                    proces(current, two);
                }
            }
            if ((eight.holding == "X" || four.holding == "X" || two.holding == "X" || one.holding == "X") && (eight.count == 3 || four.count == 3 || two.count == 3 || one.count == 3)) {
                proces(current, seven);
            }
        }


        //9-7

        if (seven.holding == "X" && seven.count == 2) {
            proces(current, eight);
            if (two.holding == "X" && two.count == 3) {
                proces(current, six);
                if (four.holding == "X" && four.count == 4) {
                    proces(current, one);
                }
                if ((three.holding == "X" || one.holding == "X") && (three.count == 4 || one.count == 4)) {
                    proces(current, four);
                }
            }
            if ((six.holding == "X" || four.holding == "X" || three.holding == "X" || one.holding == "X") && (six.count == 3 || four.count == 3 || three.count == 3 || one.count == 3)) {
                proces(current, two);
            }
        }


        //9-8

        if (eight.holding == "X" && eight.count == 2) {
            proces(current, seven);
            if (three.holding == "X" && three.count == 3) {
                proces(current, six);
                if (four.holding == "X" && four.count == 4) {
                    proces(current, two);
                    console.log("yahi hai")
                }
                if ((two.holding == "X" || one.holding == "X") && (two.count == 4 || one.count == 4)) {
                    proces(current, four);
                }
            }
            if ((six.holding == "X" || four.holding == "X" || two.holding == "X" || one.holding == "X") || (six.count == 3 || four.count == 3 || two.count == 3 || one.count == 3)) {
                proces(current, three);
            }
        }
    }
    //User starting with two

    if (two.holding == "X" && two.count == 1) {
        proces(current, eight);


        //2-1

        if (one.holding == "X" && one.count == 2) {
            proces(current, three);
            if (five.holding == "X" && five.count == 3) {
                proces(current, nine);
                if (six.holding == "X" && six.count == 4) {
                    proces(current, seven);
                }
                if ((four.holding == "X" || seven.holding == "X") && (four.count == 4 || seven.count == 4)) {
                    proces(current, six);
                }
            }
            if (four.holding == "X" && four.count == 3) {
                proces(current, seven);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, nine);
                }
                if ((six.holding == "X" || nine.holding == "X") && (six.count == 4 || nine.count == 4)) {
                    proces(current, five);
                }
            }
            if (six.holding == "X" && six.count == 3) {
                proces(current, seven);
                if (nine.holding == "X" && nine.count == 4) {
                    proces(current, five);
                }
                if ((four.holding == "X" || five.holding == "X") && (four.count == 4 || five.count == 4)) {
                    proces(current, nine);
                }
            }
            if (seven.holding == "X" && seven.count == 3) {
                proces(current, four);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, nine);
                }
                if ((six.holding == "X" || nine.holding == "X") && (six.count == 4 || nine.count == 4)) {
                    proces(current, five);
                }
            }
            if (nine.holding == "X" && nine.count == 3) {
                proces(current, five);
                if (seven.holding == "X" && seven.count == 4) {
                    proces(current, four);
                }
                if ((four.holding == "X" || six.holding == "X") && (four.count == 4 || six.count == 4)) {
                    proces(current, seven);
                }
            }

        }








        //2-3

        if (three.holding == "X" && three.count == 2) {
            proces(current, one);
            if (five.holding == "X" && five.count == 3) {
                proces(current, seven);
                if (four.holding == "X" && four.count == 4) {
                    proces(current, nine);
                }
                if ((six.holding == "X" || nine.holding == "X") && (six.count == 4 || nine.count == 4)) {
                    proces(current, four);
                }
            }
            if (six.holding == "X" && six.count == 3) {
                proces(current, nine);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, seven);
                }
                if ((four.holding == "X" || seven.holding == "X") && (four.count == 4 || seven.count == 4)) {
                    proces(current, five);
                }
            }
            if (four.holding == "X" && four.count == 3) {
                proces(current, nine);
                if (seven.holding == "X" && seven.count == 4) {
                    proces(current, five);
                }
                if ((six.holding == "X" || five.holding == "X") && (six.count == 4 || five.count == 4)) {
                    proces(current, seven);
                }
            }
            if (nine.holding == "X" && nine.count == 3) {
                proces(current, six);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, seven);
                }
                if ((four.holding == "X" || seven.holding == "X") && (four.count == 4 || seven.count == 4)) {
                    proces(current, five);
                }
            }
            if (seven.holding == "X" && seven.count == 3) {
                proces(current, five);
                if (nine.holding == "X" && nine.count == 4) {
                    proces(current, six);
                }
                if ((six.holding == "X" || four.holding == "X") && (six.count == 4 || four.count == 4)) {
                    proces(current, nine);
                }
            }

        }




        //2-4


        if (four.holding == "X" && four.count == 2) {
            proces(current, three);

            if (one.holding == "X" && one.count == 3) {
                proces(current, seven);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, six);
                }
                if ((six.holding == "X" || nine.holding == "X") && (six.count == 4 || nine.count == 4)) {
                    proces(current, five);

                }
            }

            if (five.holding == "X" && five.count == 3) {
                proces(current, six);
                if (nine.holding == "X" && nine.count == 4) {
                    proces(current, one);
                }
                if ((one.holding == "X" || seven.holding == "X") && (one.count == 4 || seven.count == 4)) {
                    proces(current, nine);

                }
            }

            if (six.holding == "X" && six.count == 3) {
                proces(current, five);
                if (seven.holding == "X" && seven.count == 4) {
                    proces(current, one);
                }
                if ((one.holding == "X" || nine.holding == "X") && (one.count == 4 || nine.count == 4)) {
                    proces(current, seven);

                }
            }

            if (seven.holding == "X" && seven.count == 3) {
                proces(current, one);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, six);
                }
                if ((six.holding == "X" || nine.holding == "X") && (six.count == 4 || nine.count == 4)) {
                    proces(current, five);

                }
            }

            if (nine.holding == "X" && nine.count == 3) {
                proces(current, one);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, six);
                }
                if ((six.holding == "X" || seven.holding == "X") && (six.count == 4 || seven.count == 4)) {
                    proces(current, five);

                }
            }
        }


        //2-6



        if (six.holding == "X" && six.count == 2) {
            proces(current, one);

            if (three.holding == "X" && three.count == 3) {
                proces(current, seven);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, four);
                }
                if ((four.holding == "X" || nine.holding == "X") && (four.count == 4 || nine.count == 4)) {
                    proces(current, five);

                }
            }

            if (five.holding == "X" && five.count == 3) {
                proces(current, four);
                if (nine.holding == "X" && nine.count == 4) {
                    proces(current, three);
                }
                if ((three.holding == "X" || seven.holding == "X") && (three.count == 4 || seven.count == 4)) {
                    proces(current, nine);

                }
            }

            if (four.holding == "X" && four.count == 3) {
                proces(current, five);
                if (seven.holding == "X" && seven.count == 4) {
                    proces(current, three);
                }
                if ((three.holding == "X" || nine.holding == "X") && (three.count == 4 || nine.count == 4)) {
                    proces(current, seven);

                }
            }

            if (seven.holding == "X" && seven.count == 3) {
                proces(current, three);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, four);
                }
                if ((four.holding == "X" || nine.holding == "X") && (four.count == 4 || nine.count == 4)) {
                    proces(current, five);

                }
            }

            if (nine.holding == "X" && nine.count == 3) {
                proces(current, three);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, four);
                }
                if ((four.holding == "X" || seven.holding == "X") && (four.count == 4 || seven.count == 4)) {
                    proces(current, five);

                }
            }
        }




        //2-7

        if (seven.holding == "X" && seven.count == 2) {
            proces(current, three);

            if (one.holding == "X" && one.count == 3) {
                proces(current, four);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, nine);
                }
                if ((six.holding == "X" || nine.holding == "X") && (six.count == 4 || nine.count == 4)) {
                    proces(current, five);

                }
            }

            if (five.holding == "X" && five.count == 3) {
                proces(current, one);
                if (four.holding == "X" && four.count == 4) {
                    proces(current, six);
                }
                if ((six.holding == "X" || nine.holding == "X") && (six.count == 4 || nine.count == 4)) {
                    proces(current, four);

                }
            }

            if (six.holding == "X" && six.count == 3) {
                proces(current, one);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, four);
                }
                if ((four.holding == "X" || nine.holding == "X") && (four.count == 4 || nine.count == 4)) {
                    proces(current, five);

                }
            }

            if (four.holding == "X" && four.count == 3) {
                proces(current, one);
                if (six.holding == "X" && six.count == 4) {
                    proces(current, five);
                }
                if ((five.holding == "X" || nine.holding == "X") && (five.count == 4 || nine.count == 4)) {
                    proces(current, six);

                }
            }

            if (nine.holding == "X" && nine.count == 3) {
                proces(current, five);
                if (six.holding == "X" && six.count == 4) {
                    proces(current, four);
                }
                if ((one.holding == "X" || four.holding == "X") && (one.count == 4 || four.count == 4)) {
                    proces(current, one);

                }
            }
        }




        //2-9
        if (nine.holding == "X" && nine.count == 2) {
            proces(current, one);

            if (three.holding == "X" && three.count == 3) {
                proces(current, six);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, seven);
                }
                if ((four.holding == "X" || seven.holding == "X") && (four.count == 4 || seven.count == 4)) {
                    proces(current, five);

                }
            }

            if (five.holding == "X" && five.count == 3) {
                proces(current, three);
                if (six.holding == "X" && six.count == 4) {
                    proces(current, four);
                }
                if ((four.holding == "X" || seven.holding == "X") && (four.count == 4 || seven.count == 4)) {
                    proces(current, six);

                }
            }

            if (four.holding == "X" && four.count == 3) {
                proces(current, three);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, six);
                }
                if ((six.holding == "X" || seven.holding == "X") && (six.count == 4 || seven.count == 4)) {
                    proces(current, five);

                }
            }

            if (six.holding == "X" && six.count == 3) {
                proces(current, three);
                if (four.holding == "X" && four.count == 4) {
                    proces(current, five);
                }
                if ((five.holding == "X" || seven.holding == "X") && (five.count == 4 || seven.count == 4)) {
                    proces(current, four);

                }
            }

            if (seven.holding == "X" && seven.count == 3) {
                proces(current, five);
                if (four.holding == "X" && four.count == 4) {
                    proces(current, six);
                }
                if ((three.holding == "X" || six.holding == "X") && (three.count == 4 || six.count == 4)) {
                    proces(current, three);

                }
            }
        }
    }

    //User starting with four

    if (four.holding == "X" && four.count == 1) {
        proces(current, six);


        //4-7

        if (seven.holding == "X" && seven.count == 2) {
            proces(current, one);
            if (five.holding == "X" && five.count == 3) {
                proces(current, three);
                if (two.holding == "X" && two.count == 4) {
                    proces(current, nine);
                }
                if ((eight.holding == "X" || nine.holding == "X") && (eight.count == 4 || nine.count == 4)) {
                    proces(current, two);
                }
            }
            if (eight.holding == "X" && eight.count == 3) {
                proces(current, nine);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, three);
                }
                if ((two.holding == "X" || three.holding == "X") && (two.count == 4 || three.count == 4)) {
                    proces(current, five);
                }
            }
            if (two.holding == "X" && two.count == 3) {
                proces(current, nine);
                if (three.holding == "X" && three.count == 4) {
                    proces(current, five);
                }
                if ((eight.holding == "X" || five.holding == "X") && (eight.count == 4 || five.count == 4)) {
                    proces(current, three);
                }
            }
            if (nine.holding == "X" && nine.count == 3) {
                proces(current, eight);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, three);
                }
                if ((two.holding == "X" || three.holding == "X") && (two.count == 4 || three.count == 4)) {
                    proces(current, five);
                }
            }
            if (three.holding == "X" && three.count == 3) {
                proces(current, five);
                if (nine.holding == "X" && nine.count == 4) {
                    proces(current, eight);
                }
                if ((eight.holding == "X" || two.holding == "X") && (eight.count == 4 || two.count == 4)) {
                    proces(current, nine);
                }
            }

        }








        //4-1

        if (one.holding == "X" && one.count == 2) {
            proces(current, seven);
            if (five.holding == "X" && five.count == 3) {
                proces(current, nine);
                if (eight.holding == "X" && eight.count == 4) {
                    proces(current, three);
                }
                if ((two.holding == "X" || three.holding == "X") && (two.count == 4 || three.count == 4)) {
                    proces(current, eight);
                }
            }
            if (two.holding == "X" && two.count == 3) {
                proces(current, three);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, nine);
                }
                if ((eight.holding == "X" || nine.holding == "X") && (eight.count == 4 || nine.count == 4)) {
                    proces(current, five);
                }
            }
            if (eight.holding == "X" && eight.count == 3) {
                proces(current, three);
                if (nine.holding == "X" && nine.count == 4) {
                    proces(current, five);
                }
                if ((two.holding == "X" || five.holding == "X") && (two.count == 4 || five.count == 4)) {
                    proces(current, nine);
                }
            }
            if (three.holding == "X" && three.count == 3) {
                proces(current, two);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, nine);
                }
                if ((eight.holding == "X" || nine.holding == "X") && (eight.count == 4 || nine.count == 4)) {
                    proces(current, five);
                }
            }
            if (nine.holding == "X" && nine.count == 3) {
                proces(current, five);
                if (three.holding == "X" && three.count == 4) {
                    proces(current, two);
                }
                if ((two.holding == "X" || eight.holding == "X") && (two.count == 4 || eight.count == 4)) {
                    proces(current, three);
                }
            }

        }




        //4-8



        if (eight.holding == "X" && eight.count == 2) {
            proces(current, one);

            if (seven.holding == "X" && seven.count == 3) {
                proces(current, nine);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, two);
                }
                if ((two.holding == "X" || three.holding == "X") && (two.count == 4 || three.count == 4)) {
                    proces(current, five);

                }
            }

            if (five.holding == "X" && five.count == 3) {
                proces(current, two);
                if (three.holding == "X" && three.count == 4) {
                    proces(current, seven);
                }
                if ((seven.holding == "X" || nine.holding == "X") && (seven.count == 4 || nine.count == 4)) {
                    proces(current, three);

                }
            }

            if (two.holding == "X" && two.count == 3) {
                proces(current, five);
                if (nine.holding == "X" && nine.count == 4) {
                    proces(current, seven);
                }
                if ((seven.holding == "X" || three.holding == "X") && (seven.count == 4 || three.count == 4)) {
                    proces(current, nine);

                }
            }

            if (nine.holding == "X" && nine.count == 3) {
                proces(current, seven);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, two);
                }
                if ((two.holding == "X" || three.holding == "X") && (two.count == 4 || three.count == 4)) {
                    proces(current, five);

                }
            }

            if (three.holding == "X" && three.count == 3) {
                proces(current, seven);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, two);
                }
                if ((two.holding == "X" || nine.holding == "X") && (two.count == 4 || nine.count == 4)) {
                    proces(current, five);

                }
            }
        }


        //4-2


        if (two.holding == "X" && two.count == 2) {
            proces(current, seven);

            if (one.holding == "X" && one.count == 3) {
                proces(current, nine);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, eight);
                }
                if ((eight.holding == "X" || three.holding == "X") && (eight.count == 4 || three.count == 4)) {
                    proces(current, five);

                }
            }

            if (five.holding == "X" && five.count == 3) {
                proces(current, eight);
                if (three.holding == "X" && three.count == 4) {
                    proces(current, one);
                }
                if ((one.holding == "X" || nine.holding == "X") && (one.count == 4 || nine.count == 4)) {
                    proces(current, three);

                }
            }

            if (eight.holding == "X" && eight.count == 3) {
                proces(current, five);
                if (nine.holding == "X" && nine.count == 4) {
                    proces(current, one);
                }
                if ((one.holding == "X" || three.holding == "X") && (one.count == 4 || three.count == 4)) {
                    proces(current, nine);

                }
            }

            if (nine.holding == "X" && nine.count == 3) {
                proces(current, one);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, eight);
                }
                if ((eight.holding == "X" || three.holding == "X") && (eight.count == 4 || three.count == 4)) {
                    proces(current, five);

                }
            }

            if (three.holding == "X" && three.count == 3) {
                proces(current, one);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, eight);
                }
                if ((eight.holding == "X" || nine.holding == "X") && (eight.count == 4 || nine.count == 4)) {
                    proces(current, five);

                }
            }
        }




        //4-9

        if (nine.holding == "X" && nine.count == 2) {
            proces(current, one);

            if (seven.holding == "X" && seven.count == 3) {
                proces(current, eight);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, three);
                }
                if ((two.holding == "X" || three.holding == "X") && (two.count == 4 || three.count == 4)) {
                    proces(current, five);

                }
            }

            if (five.holding == "X" && five.count == 3) {
                proces(current, seven);
                if (eight.holding == "X" && eight.count == 4) {
                    proces(current, two);
                }
                if ((two.holding == "X" || three.holding == "X") && (two.count == 4 || three.count == 4)) {
                    proces(current, eight);

                }
            }

            if (two.holding == "X" && two.count == 3) {
                proces(current, seven);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, eight);
                }
                if ((eight.holding == "X" || three.holding == "X") && (eight.count == 4 || three.count == 4)) {
                    proces(current, five);

                }
            }

            if (eight.holding == "X" && eight.count == 3) {
                proces(current, seven);
                if (two.holding == "X" && two.count == 4) {
                    proces(current, five);
                }
                if ((five.holding == "X" || three.holding == "X") && (five.count == 4 || three.count == 4)) {
                    proces(current, two);

                }
            }

            if (three.holding == "X" && three.count == 3) {
                proces(current, five);
                if (two.holding == "X" && two.count == 4) {
                    proces(current, eight);
                }
                if ((seven.holding == "X" || eight.holding == "X") && (seven.count == 4 || eight.count == 4)) {
                    proces(current, nine);

                }
            }
        }




        //4-3
        if (three.holding == "X" && three.count == 2) {
            proces(current, seven);

            if (one.holding == "X" && one.count == 3) {
                proces(current, two);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, nine);
                }
                if ((eight.holding == "X" || nine.holding == "X") && (eight.count == 4 || nine.count == 4)) {
                    proces(current, five);

                }
            }

            if (five.holding == "X" && five.count == 3) {
                proces(current, one);
                if (two.holding == "X" && two.count == 4) {
                    proces(current, eight);
                }
                if ((eight.holding == "X" || nine.holding == "X") && (eight.count == 4 || nine.count == 4)) {
                    proces(current, two);

                }
            }

            if (eight.holding == "X" && eight.count == 3) {
                proces(current, one);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, two);
                }
                if ((two.holding == "X" || nine.holding == "X") && (two.count == 4 || nine.count == 4)) {
                    proces(current, five);

                }
            }

            if (two.holding == "X" && two.count == 3) {
                proces(current, one);
                if (eight.holding == "X" && eight.count == 4) {
                    proces(current, five);
                }
                if ((five.holding == "X" || nine.holding == "X") && (five.count == 4 || nine.count == 4)) {
                    proces(current, eight);

                }
            }

            if (nine.holding == "X" && nine.count == 3) {
                proces(current, five);
                if (eight.holding == "X" && eight.count == 4) {
                    proces(current, two);
                }
                if ((one.holding == "X" || two.holding == "X") && (one.count == 4 || two.count == 4)) {
                    proces(current, one);

                }
            }
        }
    }




    //User starting with six

    if (six.holding == "X" && six.count == 1) {
        proces(current, four);


        //6-3

        if (three.holding == "X" && three.count == 2) {
            proces(current, nine);
            if (five.holding == "X" && five.count == 3) {
                proces(current, seven);
                if (eight.holding == "X" && eight.count == 4) {
                    proces(current, one);
                }
                if ((two.holding == "X" || one.holding == "X") && (two.count == 4 || one.count == 4)) {
                    proces(current, eight);
                }
            }
            if (two.holding == "X" && two.count == 3) {
                proces(current, one);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, seven);
                }
                if ((eight.holding == "X" || seven.holding == "X") && (eight.count == 4 || seven.count == 4)) {
                    proces(current, five);
                }
            }
            if (eight.holding == "X" && eight.count == 3) {
                proces(current, one);
                if (seven.holding == "X" && seven.count == 4) {
                    proces(current, five);
                }
                if ((two.holding == "X" || five.holding == "X") && (two.count == 4 || five.count == 4)) {
                    proces(current, seven);
                }
            }
            if (one.holding == "X" && one.count == 3) {
                proces(current, two);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, seven);
                }
                if ((eight.holding == "X" || seven.holding == "X") && (eight.count == 4 || seven.count == 4)) {
                    proces(current, five);
                }
            }
            if (seven.holding == "X" && seven.count == 3) {
                proces(current, five);
                if (one.holding == "X" && one.count == 4) {
                    proces(current, two);
                }
                if ((two.holding == "X" || eight.holding == "X") && (two.count == 4 || eight.count == 4)) {
                    proces(current, one);
                }
            }

        }








        //6-9

        if (nine.holding == "X" && nine.count == 2) {
            proces(current, three);
            if (five.holding == "X" && five.count == 3) {
                proces(current, one);
                if (two.holding == "X" && two.count == 4) {
                    proces(current, seven);
                }
                if ((eight.holding == "X" || seven.holding == "X") && (eight.count == 4 || seven.count == 4)) {
                    proces(current, two);
                }
            }
            if (eight.holding == "X" && eight.count == 3) {
                proces(current, seven);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, one);
                }
                if ((two.holding == "X" || one.holding == "X") && (two.count == 4 || one.count == 4)) {
                    proces(current, five);
                }
            }
            if (two.holding == "X" && two.count == 3) {
                proces(current, seven);
                if (one.holding == "X" && one.count == 4) {
                    proces(current, five);
                }
                if ((eight.holding == "X" || five.holding == "X") && (eight.count == 4 || five.count == 4)) {
                    proces(current, one);
                }
            }
            if (seven.holding == "X" && seven.count == 3) {
                proces(current, eight);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, one);
                }
                if ((two.holding == "X" || one.holding == "X") && (two.count == 4 || one.count == 4)) {
                    proces(current, five);
                }
            }
            if (one.holding == "X" && one.count == 3) {
                proces(current, five);
                if (seven.holding == "X" && seven.count == 4) {
                    proces(current, eight);
                }
                if ((eight.holding == "X" || two.holding == "X") && (eight.count == 4 || two.count == 4)) {
                    proces(current, seven);
                }
            }

        }




        //6-2

        if (two.holding == "X" && two.count == 2) {
            proces(current, nine);

            if (three.holding == "X" && three.count == 3) {
                proces(current, one);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, eight);
                }
                if ((eight.holding == "X" || seven.holding == "X") && (eight.count == 4 || seven.count == 4)) {
                    proces(current, five);

                }
            }

            if (five.holding == "X" && five.count == 3) {
                proces(current, eight);
                if (seven.holding == "X" && seven.count == 4) {
                    proces(current, three);
                }
                if ((three.holding == "X" || one.holding == "X") && (three.count == 4 || one.count == 4)) {
                    proces(current, seven);

                }
            }

            if (eight.holding == "X" && eight.count == 3) {
                proces(current, five);
                if (one.holding == "X" && one.count == 4) {
                    proces(current, three);
                }
                if ((three.holding == "X" || seven.holding == "X") && (three.count == 4 || seven.count == 4)) {
                    proces(current, one);

                }
            }

            if (one.holding == "X" && one.count == 3) {
                proces(current, three);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, eight);
                }
                if ((eight.holding == "X" || seven.holding == "X") && (eight.count == 4 || seven.count == 4)) {
                    proces(current, five);

                }
            }

            if (seven.holding == "X" && seven.count == 3) {
                proces(current, three);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, eight);
                }
                if ((eight.holding == "X" || one.holding == "X") && (eight.count == 4 || one.count == 4)) {
                    proces(current, five);

                }
            }
        }


        //6-8

        if (eight.holding == "X" && eight.count == 2) {
            proces(current, three);

            if (nine.holding == "X" && nine.count == 3) {
                proces(current, one);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, two);
                }
                if ((two.holding == "X" || seven.holding == "X") && (two.count == 4 || seven.count == 4)) {
                    proces(current, five);

                }
            }

            if (five.holding == "X" && five.count == 3) {
                proces(current, two);
                if (seven.holding == "X" && seven.count == 4) {
                    proces(current, nine);
                }
                if ((nine.holding == "X" || one.holding == "X") && (nine.count == 4 || one.count == 4)) {
                    proces(current, seven);

                }
            }

            if (two.holding == "X" && two.count == 3) {
                proces(current, five);
                if (one.holding == "X" && one.count == 4) {
                    proces(current, nine);
                }
                if ((nine.holding == "X" || seven.holding == "X") && (nine.count == 4 || seven.count == 4)) {
                    proces(current, one);

                }
            }

            if (one.holding == "X" && one.count == 3) {
                proces(current, nine);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, two);
                }
                if ((two.holding == "X" || seven.holding == "X") && (two.count == 4 || seven.count == 4)) {
                    proces(current, five);

                }
            }

            if (seven.holding == "X" && seven.count == 3) {
                proces(current, nine);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, two);
                }
                if ((two.holding == "X" || one.holding == "X") && (two.count == 4 || one.count == 4)) {
                    proces(current, five);

                }
            }
        }




        //6-1

        if (one.holding == "X" && one.count == 2) {
            proces(current, nine);

            if (three.holding == "X" && three.count == 3) {
                proces(current, two);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, seven);
                }
                if ((eight.holding == "X" || seven.holding == "X") && (eight.count == 4 || seven.count == 4)) {
                    proces(current, five);

                }
            }

            if (five.holding == "X" && five.count == 3) {
                proces(current, three);
                if (two.holding == "X" && two.count == 4) {
                    proces(current, eight);
                }
                if ((eight.holding == "X" || seven.holding == "X") && (eight.count == 4 || seven.count == 4)) {
                    proces(current, two);

                }
            }

            if (eight.holding == "X" && eight.count == 3) {
                proces(current, three);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, two);
                }
                if ((two.holding == "X" || seven.holding == "X") && (two.count == 4 || seven.count == 4)) {
                    proces(current, five);

                }
            }

            if (two.holding == "X" && two.count == 3) {
                proces(current, three);
                if (eight.holding == "X" && eight.count == 4) {
                    proces(current, five);
                }
                if ((five.holding == "X" || seven.holding == "X") && (five.count == 4 || seven.count == 4)) {
                    proces(current, eight);

                }
            }

            if (seven.holding == "X" && seven.count == 3) {
                proces(current, five);
                if (eight.holding == "X" && eight.count == 4) {
                    proces(current, two);
                }
                if ((three.holding == "X" || two.holding == "X") && (three.count == 4 || two.count == 4)) {
                    proces(current, eight);

                }
            }
        }




        //6-7
        if (seven.holding == "X" && seven.count == 2) {
            proces(current, three);

            if (nine.holding == "X" && nine.count == 3) {
                proces(current, eight);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, one);
                }
                if ((two.holding == "X" || one.holding == "X") && (two.count == 4 || one.count == 4)) {
                    proces(current, five);

                }
            }

            if (five.holding == "X" && five.count == 3) {
                proces(current, nine);
                if (eight.holding == "X" && eight.count == 4) {
                    proces(current, two);
                }
                if ((two.holding == "X" || one.holding == "X") && (two.count == 4 || one.count == 4)) {
                    proces(current, eight);

                }
            }

            if (two.holding == "X" && two.count == 3) {
                proces(current, nine);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, eight);
                }
                if ((eight.holding == "X" || one.holding == "X") && (eight.count == 4 || one.count == 4)) {
                    proces(current, five);

                }
            }

            if (eight.holding == "X" && eight.count == 3) {
                proces(current, nine);
                if (two.holding == "X" && two.count == 4) {
                    proces(current, five);
                }
                if ((five.holding == "X" || one.holding == "X") && (five.count == 4 || one.count == 4)) {
                    proces(current, two);

                }
            }

            if (one.holding == "X" && one.count == 3) {
                proces(current, five);
                if (eight.holding == "X" && eight.count == 4) {
                    proces(current, two);
                }
                if ((nine.holding == "X" || two.holding == "X") && (nine.count == 4 || two.count == 4)) {
                    proces(current,eight);

                }
            }
        }
    }








    //User starting with eight

    if (eight.holding == "X" && eight.count == 1) {
        proces(current, two);


        //8-9

        if (nine.holding == "X" && nine.count == 2) {
            proces(current, seven);
            if (five.holding == "X" && five.count == 3) {
                proces(current, one);
                if (four.holding == "X" && four.count == 4) {
                    proces(current, three);
                }
                if ((six.holding == "X" || three.holding == "X") && (six.count == 4 || three.count == 4)) {
                    proces(current, four);
                }
            }
            if (six.holding == "X" && six.count == 3) {
                proces(current, three);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, one);
                }
                if ((four.holding == "X" || one.holding == "X") && (four.count == 4 || one.count == 4)) {
                    proces(current, five);
                }
            }
            if (four.holding == "X" && four.count == 3) {
                proces(current, three);
                if (one.holding == "X" && one.count == 4) {
                    proces(current, five);
                }
                if ((six.holding == "X" || five.holding == "X") && (six.count == 4 || five.count == 4)) {
                    proces(current, one);
                }
            }
            if (three.holding == "X" && three.count == 3) {
                proces(current, six);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, one);
                }
                if ((four.holding == "X" || one.holding == "X") && (four.count == 4 || one.count == 4)) {
                    proces(current, five);
                }
            }
            if (one.holding == "X" && one.count == 3) {
                proces(current, five);
                if (three.holding == "X" && three.count == 4) {
                    proces(current, six);
                }
                if ((six.holding == "X" || four.holding == "X") && (six.count == 4 || four.count == 4)) {
                    proces(current, three);
                }
            }

        }








        //8-7

        if (seven.holding == "X" && seven.count == 2) {
            proces(current, nine);
            if (five.holding == "X" && five.count == 3) {
                proces(current, three);
                if (six.holding == "X" && six.count == 4) {
                    proces(current, one);
                }
                if ((four.holding == "X" || one.holding == "X") && (four.count == 4 || one.count == 4)) {
                    proces(current, six);
                }
            }
            if (four.holding == "X" && four.count == 3) {
                proces(current, one);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, three);
                }
                if ((six.holding == "X" || three.holding == "X") && (six.count == 4 || three.count == 4)) {
                    proces(current, five);
                }
            }
            if (six.holding == "X" && six.count == 3) {
                proces(current, one);
                if (three.holding == "X" && three.count == 4) {
                    proces(current, five);
                }
                if ((four.holding == "X" || five.holding == "X") && (four.count == 4 || five.count == 4)) {
                    proces(current, three);
                }
            }
            if (one.holding == "X" && one.count == 3) {
                proces(current, four);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, three);
                }
                if ((six.holding == "X" || three.holding == "X") && (six.count == 4 || three.count == 4)) {
                    proces(current, five);
                }
            }
            if (three.holding == "X" && three.count == 3) {
                proces(current, five);
                if (one.holding == "X" && one.count == 4) {
                    proces(current, four);
                }
                if ((four.holding == "X" || six.holding == "X") && (four.count == 4 || six.count == 4)) {
                    proces(current, one);
                }
            }

        }




        //8-6


        if (six.holding == "X" && six.count == 2) {
            proces(current, seven);

            if (nine.holding == "X" && nine.count == 3) {
                proces(current, three);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, four);
                }
                if ((four.holding == "X" || one.holding == "X") && (four.count == 4 || one.count == 4)) {
                    proces(current, five);

                }
            }

            if (five.holding == "X" && five.count == 3) {
                proces(current, four);
                if (one.holding == "X" && one.count == 4) {
                    proces(current, nine);
                }
                if ((nine.holding == "X" || three.holding == "X") && (nine.count == 4 || three.count == 4)) {
                    proces(current, one);

                }
            }

            if (four.holding == "X" && four.count == 3) {
                proces(current, five);
                if (three.holding == "X" && three.count == 4) {
                    proces(current, nine);
                }
                if ((nine.holding == "X" || one.holding == "X") && (nine.count == 4 || one.count == 4)) {
                    proces(current, three);

                }
            }

            if (three.holding == "X" && three.count == 3) {
                proces(current, nine);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, four);
                }
                if ((four.holding == "X" || one.holding == "X") && (four.count == 4 || one.count == 4)) {
                    proces(current, five);

                }
            }

            if (one.holding == "X" && one.count == 3) {
                proces(current, nine);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, four);
                }
                if ((four.holding == "X" || three.holding == "X") && (four.count == 4 || three.count == 4)) {
                    proces(current, five);

                }
            }
        }


        //8-4



        if (four.holding == "X" && four.count == 2) {
            proces(current, nine);

            if (seven.holding == "X" && seven.count == 3) {
                proces(current, three);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, six);
                }
                if ((six.holding == "X" || one.holding == "X") && (six.count == 4 || one.count == 4)) {
                    proces(current, five);

                }
            }

            if (five.holding == "X" && five.count == 3) {
                proces(current, six);
                if (one.holding == "X" && one.count == 4) {
                    proces(current, seven);
                }
                if ((seven.holding == "X" || three.holding == "X") && (seven.count == 4 || three.count == 4)) {
                    proces(current, one);

                }
            }

            if (six.holding == "X" && six.count == 3) {
                proces(current, five);
                if (three.holding == "X" && three.count == 4) {
                    proces(current, seven);
                }
                if ((seven.holding == "X" || one.holding == "X") && (seven.count == 4 || one.count == 4)) {
                    proces(current, three);

                }
            }

            if (three.holding == "X" && three.count == 3) {
                proces(current, seven);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, six);
                }
                if ((six.holding == "X" || one.holding == "X") && (six.count == 4 || one.count == 4)) {
                    proces(current, five);

                }
            }

            if (one.holding == "X" && one.count == 3) {
                proces(current, seven);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, six);
                }
                if ((six.holding == "X" || three.holding == "X") && (six.count == 4 || three.count == 4)) {
                    proces(current, five);

                }
            }
        }




        //8-3

        if (three.holding == "X" && three.count == 2) {
            proces(current, seven);

            if (nine.holding == "X" && nine.count == 3) {
                proces(current, six);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, one);
                }
                if ((four.holding == "X" || one.holding == "X") && (four.count == 4 || one.count == 4)) {
                    proces(current, five);

                }
            }

            if (five.holding == "X" && five.count == 3) {
                proces(current, nine);
                if (six.holding == "X" && six.count == 4) {
                    proces(current, four);
                }
                if ((four.holding == "X" || one.holding == "X") && (four.count == 4 || one.count == 4)) {
                    proces(current, six);

                }
            }

            if (four.holding == "X" && four.count == 3) {
                proces(current, nine);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, six);
                }
                if ((six.holding == "X" || one.holding == "X") && (six.count == 4 || one.count == 4)) {
                    proces(current, five);

                }
            }

            if (six.holding == "X" && six.count == 3) {
                proces(current, nine);
                if (four.holding == "X" && four.count == 4) {
                    proces(current, five);
                }
                if ((five.holding == "X" || one.holding == "X") && (five.count == 4 || one.count == 4)) {
                    proces(current, four);

                }
            }

            if (one.holding == "X" && one.count == 3) {
                proces(current, five);
                if (four.holding == "X" && four.count == 4) {
                    proces(current, six);
                }
                if ((nine.holding == "X" || six.holding == "X") && (nine.count == 4 || six.count == 4)) {
                    proces(current, four);

                }
            }
        }




        //8-1
        if (one.holding == "X" && one.count == 2) {
            proces(current, nine);

            if (seven.holding == "X" && seven.count == 3) {
                proces(current, four);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, three);
                }
                if ((six.holding == "X" || three.holding == "X") && (six.count == 4 || three.count == 4)) {
                    proces(current, five);

                }
            }

            if (five.holding == "X" && five.count == 3) {
                proces(current, seven);
                if (four.holding == "X" && four.count == 4) {
                    proces(current, six);
                }
                if ((six.holding == "X" || three.holding == "X") && (six.count == 4 || three.count == 4)) {
                    proces(current, four);

                }
            }

            if (six.holding == "X" && six.count == 3) {
                proces(current, seven);
                if (five.holding == "X" && five.count == 4) {
                    proces(current, four);
                }
                if ((four.holding == "X" || three.holding == "X") && (four.count == 4 || three.count == 4)) {
                    proces(current, five);

                }
            }

            if (four.holding == "X" && four.count == 3) {
                proces(current, seven);
                if (six.holding == "X" && six.count == 4) {
                    proces(current, five);
                }
                if ((five.holding == "X" || three.holding == "X") && (five.count == 4 || three.count == 4)) {
                    proces(current, six);

                }
            }

            if (three.holding == "X" && three.count == 3) {
                proces(current, five);
                if (six.holding == "X" && six.count == 4) {
                    proces(current, four);
                }
                if ((seven.holding == "X" || four.holding == "X") && (seven.count == 4 || four.count == 4)) {
                    proces(current, six);

                }
            }
        }
    }


    //User starting with five
    if (five.holding == "X" && five.count == 1) {
        proces(current, one);


        //5-2

        if (two.holding == "X" && two.count == 2) {
            proces(current, eight);
            if (three.holding == "X" && three.count == 3) {
                proces(current, seven);
                if (four.holding == "X" && four.count == 4) {
                    proces(current, four);
                }
                if ((six.holding == "X" || nine.holding == "X") && (six.count == 4 || nine.count == 4)) {
                    proces(current, nine);
                }
            }
            if (four.holding == "X" && four.count == 3) {
                proces(current, six);
                if (seven.holding == "X" && seven.count == 4) {
                    proces(current, three);
                }
                if ((three.holding == "X" || nine.holding == "X") && (three.count == 4 || nine.count == 4)) {
                    proces(current, seven);
                }
            }
            if (six.holding == "X" && six.count == 3) {
                proces(current, four);
                if (seven.holding == "X" && seven.count == 4) {
                    proces(current, three);
                }
                if ((three.holding == "X" || nine.holding == "X") && (three.count == 4 || nine.count == 4)) {
                    proces(current, seven);
                }
            }
            if (seven.holding == "X" && seven.count == 3) {
                proces(current, three);
                if (four.holding == "X" && four.count == 4) {
                    proces(current, six);
                }
                if ((six.holding == "X" || nine.holding == "X") && (six.count == 4 || nine.count == 4)) {
                    proces(current, four);
                }
            }
            if (nine.holding == "X" && nine.count == 3) {
                proces(current, seven);
                if (four.holding == "X" && four.count == 4) {
                    proces(current, six);
                }
                if ((three.holding == "X" || six.holding == "X") && (three.count == 4 || six.count == 4)) {
                    proces(current, four);
                }
            }

        }




        //5-3
        if (three.holding == "X" && three.count == 2) {
            proces(current, seven);
            if ((two.holding == "X" || six.holding == "X" || eight.holding == "X" || nine.holding == "X") && (two.count == 3 || six.count == 3 || eight.count == 3 || nine.count == 3)) {
                proces(current, four);

            }

            if (four.holding == "X" && four.count == 3) {
                proces(current, six);

                if ((two.holding == "X" || nine.holding == "X") && (two.count == 4 || nine.count == 4)) {
                    proces(current, eight);
                }

                if (eight.holding == "X" && eight.count == 4) {
                    proces(current, two);
                }

            }

        }



        //5-4
        if (four.holding == "X" && four.count == 2) {
            proces(current, six);
            if (seven.holding == "X" && seven.count == 3) {
                proces(current, three);
                if (two.holding == "X" && two.count == 4) {
                    proces(current, two);
                }
                if ((eight.holding == "X" || nine.holding == "X") && (eight.count == 4 || nine.count == 4)) {
                    proces(current, nine);
                }
            }
            if (two.holding == "X" && two.count == 3) {
                proces(current, eight);
                if (three.holding == "X" && three.count == 4) {
                    proces(current, seven);
                }
                if ((seven.holding == "X" || nine.holding == "X") && (seven.count == 4 || nine.count == 4)) {
                    proces(current, three);
                }
            }
            if (eight.holding == "X" && eight.count == 3) {
                proces(current, two);
                if (three.holding == "X" && three.count == 4) {
                    proces(current, seven);
                }
                if ((seven.holding == "X" || nine.holding == "X") && (seven.count == 4 || nine.count == 4)) {
                    proces(current, three);
                }
            }
            if (three.holding == "X" && three.count == 3) {
                proces(current, seven);
                if (two.holding == "X" && two.count == 4) {
                    proces(current, eight);
                }
                if ((eight.holding == "X" || nine.holding == "X") && (eight.count == 4 || nine.count == 4)) {
                    proces(current, two);
                }
            }
            if (nine.holding == "X" && nine.count == 3) {
                proces(current, three);
                if (two.holding == "X" && two.count == 4) {
                    proces(current, eight);
                }
                if ((seven.holding == "X" || eight.holding == "X") && (seven.count == 4 || eight.count == 4)) {
                    proces(current, two);
                }
            }

        }



        //5-6

        if (six.holding == "X" && six.count == 2) {
            proces(current, four);
            if ((two.holding == "X" || three.holding == "X" || eight.holding == "X" || nine.holding == "X") && (two.count == 3 || three.count == 3 || eight.count == 3 || nine.count == 3)) {
                proces(current, seven);
            }
            if (seven.holding == "X" && seven.count == 3) {
                proces(current, three);
                if ((eight.holding == "X" || nine.holding == "X") && (eight.count == 4 || nine.count == 4)) {
                    proces(current, two);
                }
                if (two.holding == "X" && two.count == 4) {
                    proces(current, eight);
                }
            }
        }


        //5-7

        if (seven.holding == "X" && seven.count == 2) {
            proces(current, three);
            if ((four.holding == "X" || eight.holding == "X" || six.holding == "X" || nine.holding == "X") && (four.count == 3 || eight.count == 3 || six.count == 3 || nine.count == 3)) {
                proces(current, two);

            }
            if (two.holding == "X" && two.count == 3) {
                proces(current, eight);
                if ((four.holding == "X" || nine.holding == "X") && (four.count == 4 || nine.count == 4)) {
                    proces(current, six);
                }

                if (six.holding == "X" && six.count == 4) {
                    proces(current, four);
                }

            }

        }


        //5-8

        if (eight.holding == "X" && eight.count == 2) {
            proces(current, two);
            if ((four.holding == "X" || seven.holding == "X" || six.holding == "X" || nine.holding == "X") && (four.count == 3 || seven.count == 3 || six.count == 3 || nine.count == 3)) {
                proces(current, three);
            }
            if (three.holding == "X" && three.count == 3) {
                proces(current, seven);
                if ((six.holding == "X" || nine.holding == "X") && (six.count == 4 || nine.count == 4)) {
                    proces(current, four);
                }
                if (four.holding == "X" && four.count == 4) {
                    proces(current, six);
                }
            }
        }




        //5-9

        if (nine.holding == "X" && nine.count == 2) {
            proces(current, three);
            if ((seven.holding == "X" || four.holding == "X" || six.holding == "X" || eight.holding == "X") && (seven.count == 3 || four.count == 3 || six.count == 3 || eight.count == 3)) {
                proces(current, two);
            }

            if (two.holding == "X" && two.count == 3) {
                proces(current, eight);

                if ((seven.holding == "X" || six.holding == "X") && (seven.count == 4 || six.count == 4)) {
                    proces(current, four);
                }

                if (four.holding == "X" && four.count == 4) {
                    proces(current, six);
                }
            }
        }
    }
}

