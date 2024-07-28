export const getUniqueCars = (comments) => {
    const carMap = new Map();
    comments.forEach((comment) => {
      const key = `${comment.model}-${comment.marka}`;
      if (!carMap.has(key)) {
        carMap.set(key, { 
          model: comment.model,
          marka: comment.marka,
          count: 1,
          totalRate: comment.rate,
          image: comment.image
        });
      } else {
        const car = carMap.get(key);
        car.count += 1;
        car.totalRate += comment.rate;
      }
    });
    return Array.from(carMap.values()).map((car) => ({
      ...car,
      averageRate: car.totalRate / car.count,
    }));
  };
  