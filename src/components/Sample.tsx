const Sample = () => {
  function merge<T extends object, U extends object>(obj1: T, obj2: U) {
    return Object.assign({}, obj1, obj2);
  }
  let mergedObj = merge({ name: "harry" }, { age: 22 });
  console.log(mergedObj);

  return <div>Sample</div>;
};

export default Sample;
