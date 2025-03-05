document.addEventListener("DOMContentLoaded", () => {
            const optionImages = document.querySelectorAll(".option_image");
            const userResult = document.querySelector(".user_result img");
            const cpuResult = document.querySelector(".cpu_result img");
            const resultText = document.querySelector(".result");
        
            const choices = ["rock", "paper", "scissor"];
        
            optionImages.forEach((image, index) => {
                image.addEventListener("click", () => {
                    // Remove active class from all
                    optionImages.forEach(img => img.classList.remove("active"));
                    
                    // Add active class to the selected one
                    image.classList.add("active");
        
                    // Set user's choice
                    let userChoice = choices[index];
                    userResult.src = `images/${userChoice}.png`;
        
                    // Generate CPU choice
                    let cpuChoice = choices[Math.floor(Math.random() * 3)];
                    cpuResult.src = `images/${cpuChoice}.png`;
        
                    // Determine the winner
                    let outcome = determineWinner(userChoice, cpuChoice);
                    resultText.textContent = outcome;
                });
            });
        
            function determineWinner(user, cpu) {
                if (user === cpu) return "It's a Draw! 🤝";
                if (
                    (user === "rock" && cpu === "scissor") ||
                    (user === "paper" && cpu === "rock") ||
                    (user === "scissor" && cpu === "paper")
                ) {
                    return "You Win! 🎉";
                } else {
                    return "CPU Wins! 💻🏆";
                }
            }
        });


        document.addEventListener("DOMContentLoaded", () => {
            const optionImages = document.querySelectorAll(".option_image");
            const userResult = document.querySelector(".user_result img");
            const cpuResult = document.querySelector(".cpu_result img");
            const resultText = document.querySelector(".result");
        
            const userScoreText = document.getElementById("userScore");
            const cpuScoreText = document.getElementById("cpuScore");
            const drawScoreText = document.getElementById("drawScore");
        
            let userScore = 0;
            let cpuScore = 0;
            let drawScore = 0;
        
            const choices = ["rock", "paper", "scissor"];
        
            optionImages.forEach((image, index) => {
                image.addEventListener("click", () => {
                    // Remove active class from all
                    optionImages.forEach(img => img.classList.remove("active"));
                    
                    // Add active class to the selected one
                    image.classList.add("active");
        
                    // Set user's choice
                    let userChoice = choices[index];
                    userResult.src = `images/${userChoice}.png`;
        
                    // Generate CPU choice
                    let cpuChoice = choices[Math.floor(Math.random() * 3)];
                    cpuResult.src = `images/${cpuChoice}.png`;
        
                    // Determine the winner
                    let outcome = determineWinner(userChoice, cpuChoice);
        
                    // Update Score
                    if (outcome === "You Win! 🎉") {
                        userScore++;
                        userScoreText.textContent = userScore;
                    } else if (outcome === "CPU Wins! 💻🏆") {
                        cpuScore++;
                        cpuScoreText.textContent = cpuScore;
                    } else {
                        drawScore++;
                        drawScoreText.textContent = drawScore;
                    }
        
                    resultText.textContent = outcome;
                });
            });
        
            function determineWinner(user, cpu) {
                if (user === cpu) return "It's a Draw! 🤝";
                if (
                    (user === "rock" && cpu === "scissor") ||
                    (user === "paper" && cpu === "rock") ||
                    (user === "scissor" && cpu === "paper")
                ) {
                    return "You Win! 🎉";
                } else {
                    return "CPU Wins! 💻🏆";
                }
            }
        });
        
        
