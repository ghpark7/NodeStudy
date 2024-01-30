// 구조분해할당 학습

// 구조분해할당을 사용하면 객체 안의 속성을 쉽게 꺼낼 수 있음
const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    },
};
const { getCandy, status: { count } } = candyMachine;
console.log(getCandy);
console.log(count);

// 배열에서도 사용 가능
const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;
console.log(node);
console.log(obj);
console.log(bool);