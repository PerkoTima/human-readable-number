module.exports = function toReadable (number) {
	let a = ['zero','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
	let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']
	let hund = 'hundred'
	let num = number.toString().split('')
	if (number < 20) {
		return `${a[number]}`
	} else if (number >= 20 && number < 100){
		if(number % 10 === 0){
			return `${b[num[0]]}`
		}else{
			return `${b[num[0]]} ${a[num[1]]}`
		}
	}else{
		if(number % 100 === 0){
			return `${a[num[0]]} ${hund}`
		}else if(num[1] < 2){
			let num1  = number - (num[0] * 100)
			return `${a[num[0]]} ${hund} ${a[num1]}`
		}else{
			if(number % 10 === 0){
				return `${a[num[0]]} ${hund} ${b[num[1]]}`
			}else{
				return `${a[num[0]]} ${hund} ${b[num[1]]} ${a[num[2]]}`
			}
		}
	}
}
