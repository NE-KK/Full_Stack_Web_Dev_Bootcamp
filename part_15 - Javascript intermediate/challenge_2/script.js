        function calculateBMI() {
            const weight = parseFloat(document.getElementById("weight").value);
            const height = parseFloat(document.getElementById("height").value);
            if (height > 0) {
                const bmi = weight / (height * height);
                document.getElementById("bmiResult").innerText = `Your BMI is ${bmi.toFixed(1)}.`;

                if (bmi < 18.5) {
                    document.getElementById("bmiCategory").innerText = "You are underweight.";
                }
                else if (bmi >= 18.5 && bmi < 25) {
                    document.getElementById("bmiCategory").innerText = "You have a normal weight.";
                } 
                else if (bmi >= 25 && bmi < 30) {
                    document.getElementById("bmiCategory").innerText = "You are overweight.";
                } 
                else {
                    document.getElementById("bmiCategory").innerText = "You are obese.";
                }

            } else {
                document.getElementById("bmiResult").innerText = "Please enter a valid height.";
            }
        }