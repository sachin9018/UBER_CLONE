const calculateFare = (baseFare, timeRate, time,  distanceRate, distance, surge)=>{
	const distanceInKm = distance * 0.010;
	const timeInMin = time * 0.016;
	const pricePerKm = timeRate * timeInMin;
	const pricePerMinute = distanceRate * distanceInKm;
	const totalFare = (baseFare + pricePerKm + pricePerMinute) * surge - 100;
	return Math.round(totalFare);
};

export default calculateFare;
