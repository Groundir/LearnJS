let money = prompt('Сколько у вас денег?');
		
		let apple = prompt('Сколько вы купили яблок?');
		let appleCost = prompt('сколько стоит яблоко?');
		let useApple = apple * appleCost;

		let bread = prompt('сколько вы купили хлеба?')
		let breadCost = prompt('сколько стоит хлеб?');
		let useBread = apple * appleCost;
		let useVse = useApple + useBread;
		if(useVse <= money){
			document.write(true);
		}else{
			document.write(false);
		}