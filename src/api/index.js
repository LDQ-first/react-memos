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


export const signUp = (username, password) => {
    const newUser = new AV.User()
    newUser.setUsername(username)
    newUser.setPassword(password)
    return newUser.signUp()
}

export const login = (username, password) => {
    return AV.User.logIn(username, password)
}

export const logOut = () => AV.User.logOut()

export const getCurrentUser = () => AV.User.current()



export const addTo = (text, due) => {


    
}


