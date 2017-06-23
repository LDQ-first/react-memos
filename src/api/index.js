import AV from 'leancloud-storage/dist/av'



export const initLeanCloud = () => {
   /* AV.initialize()*/
    const appId = '4cjTHLzHfpXd1nwjDhjTOY22-gzGzoHsz'
    const appKey = '81pSIJzIN0ojNOM0tqEfMgT8'
    AV.init({
        appId, appKey
    })
}


export const testAV = async () => {
    const TestObject = AV.Object.extend('TestObject');
    const testObject = new TestObject();
    await testObject.save({ words: 'Hello World!' });
    alert('LeanCloud Rocks!');
}
