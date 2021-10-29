const calculateFare = (baseFare, timeRate, time,  distanceRate, distance, surge)=>{
	const distanceInKm = distance * 0.020;
	const timeInMin = time * 0.016;
	const pricePerKm = timeRate * timeInMin;
	const pricePerMinute = distanceRate * distanceInKm;
	const totalFare = (baseFare + pricePerKm + pricePerMinute) * surge - 60;
	return Math.round(totalFare);
};

export default calculateFare;
