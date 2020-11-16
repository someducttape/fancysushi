// player stats
let health = 100;
let mana = 50;

// hvor mange monstre du har drept
let killCount = 0;

// fiendens HP
let enemyHealth = 80;

// basic attack, fienden angriper deg også
function basicAttack() {
    const basicAttack = Math.floor(Math.random() * 5) + 2;

    anime({
        targets: "#rpg-chef",
        translateX: 150,
        easing: "linear",
        duration: 50,
        loop: 2,
        direction: "alternate"
    });

    anime({
        targets: "#imgEnemy",
        delay: 150,
        translateX: -150,
        easing: "linear",
        duration: 50,
        loop: 2,
        direction: "alternate"
    });

    enemyHealth = enemyHealth - basicAttack;
    document.getElementById("enemy-health-p").innerHTML = enemyHealth + "/80 HP";

    health = health - basicAttack + 1;
    document.getElementById("rpg-hp").innerHTML = health + "/100 HP"

    document.getElementById("log-p").innerHTML = "Fienden mistet " + basicAttack + " HP!"

    defeatCheck();
}

// spesielt angrep som gjør mye skade og stunner
function specialAttack() {
    if (mana > 0) {
        const specialAttack = Math.floor(Math.random() * 10) + 5;

        anime({
            targets: "#rpg-chef",
            translateX: 150,
            easing: "linear",
            duration: 50,
            loop: 2,
            rotate: 360,
            direction: "alternate"
        });

        enemyHealth = enemyHealth - specialAttack;
        document.getElementById("enemy-health-p").innerHTML = enemyHealth + "/80 HP";

        mana = mana - 5;
        document.getElementById("rpg-mana").innerHTML = mana + "/50 mana"

        document.getElementById("log-p").innerHTML = "Fienden mistet " + specialAttack + " HP!<br>Fienden er stunnet!"

        defeatCheck()
    } else {
        alert("Ikke nok mana! Prøv noe annet!");
    }
}

// healing spell
function healing() {
    if (mana > 0 && health < 70) {


        anime({
            targets: "#rpg-chef",
            translateY: -50,
            easing: "linear",
            duration: 50,
            loop: 2,
            direction: "alternate"
        });

        const healing = 30;

        mana = mana - 5;
        document.getElementById("rpg-mana").innerHTML = mana + "/50 mana"

        health = health + healing;
        document.getElementById("rpg-hp").innerHTML = health + "/100 HP"

    } else if (mana > 0 && health > 70) {
        alert("Trenger ikke å heale!");
    } else {
        alert("Ikke nok mana! Prøv noe annet!");
    }
}

// sjekker om spilleren eller monsteret er dødt 
function defeatCheck() {
    if (enemyHealth < 1) {
        alert("Enemy defeated! Some mana recovered! New monster approaching!");
        enemyHealth = 80;
        document.getElementById("enemy-health-p").innerHTML = enemyHealth + "/80 HP";

        if (mana > 40) {
            mana = 50;
        } else {
            mana = mana + 10;
        }
        document.getElementById("rpg-mana").innerHTML = mana + "/50 mana"

        killCount = killCount + 1;
    } else if (health < 1) {
        alert("You died! You successfully got " + killCount + " sushi bits!");
    }
}
