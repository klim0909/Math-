const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

function orderByProps(obj, order) {
  let result = [];

  order.forEach(key => {
    if (obj.hasOwnProperty(key)) {
      result.push({ key: key, value: obj[key] });
    }
  });


  const unorderedProps = Object.keys(obj).filter(key => !order.includes(key));
  unorderedProps.sort((a, b) => a.localeCompare(b));

  unorderedProps.forEach(prop => {
    result.push({ key: prop, value: obj[prop] });
  });

  return result;
}

console.log(orderByProps(obj, ["name", "level"]));

module.exports = orderByProps;