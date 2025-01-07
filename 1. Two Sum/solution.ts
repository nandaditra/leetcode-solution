function twoSum(nums: number[], target: number): number[] {
    const hashMap = new Map();
    let i=0;
    const result:number[] = []

    while(i < nums.length) {
        if(hashMap.has(target-nums[i])) {
            result[0] = i
            result[1] = hashMap.get(target-nums[i])
        }
        hashMap.set(nums[i], i)
        i++
    }

    return result
};