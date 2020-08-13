let string = "0";
let infoString = "";

let onDisplay = document.querySelector(".display");
let info = document.querySelector(".info");

onDisplay.innerText = string;
info.innerText = infoString;

let currentOperator;

let cleanLater = 0;
let cleaninfo = 0;

let n;

let operatorFlag = 0;


document.querySelectorAll(".key").forEach((key) => 
{
	//console.log(key);
	key.addEventListener("click", () => 
	{
		//console.log(key.textContent);
		let cls = key.getAttribute("class");
		//console.log(cls);

		console.log(key.textContent == "0");
		console.log(key.textContent);

		if(cleaninfo)
		{
			infoString = "";
			cleaninfo = 0;
		}

		//If the key is numeric
		if(!isNaN(key.textContent))
		{
			//ilk rakam giriliyor
			if(onDisplay.textContent == "0" || cleanLater == 1)
			{
				//console.log("asd");
				cleanLater = 0;
				string = key.textContent;
			}else
			{
				string += key.textContent;
			}
		}

		if(cls.includes("clean"))
		{
			cleanLater = 0, operatorFlag = 0, n = 0;
			string = "0";
			infoString = "";
		}

		if(cls.includes("operator"))
		{
			if(!operatorFlag)
			{
				n = parseFloat(onDisplay.innerText);
				operatorFlag = 1;
				cleanLater = 1;
				currentOperator = key.textContent;

				infoString = onDisplay.innerText + " ";
			}else
			{
				if(!cleanLater)
				{
					cleanLater = 1;
					string = calculate(n, parseFloat(onDisplay.textContent), currentOperator).toString();
					n = calculate(n, parseFloat(onDisplay.textContent), currentOperator);


					
					infoString += currentOperator + " " + onDisplay.textContent + " ";
				}
				currentOperator = key.textContent;
			}
		}

		if(cls.includes("equal"))
		{
			cleanLater = 1, operatorFlag = 0;
			string = calculate(n, parseFloat(onDisplay.textContent), currentOperator).toString();
			n = calculate(n, parseFloat(onDisplay.textContent), currentOperator);

			infoString += currentOperator + " " + onDisplay.textContent + " = " + string;

			cleaninfo = 1;

		}

		onDisplay.innerText = string;
		info.innerText = infoString;


	});
});



const calculate = function(n1, n2, operator)
{
	if(operator == '+')
	{
		return n1+n2;
	}else if(operator == '-')
	{
		return n1-n2;
	}else if(operator == '*')
	{
		return n1*n2;
	}else if(operator == '/')
	{
		return (n1/n2).toFixed(2);
	}
}
