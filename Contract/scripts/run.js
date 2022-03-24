// Gathering Info from Contract and deploying contract

const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners()
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); //compiles contract //gives us files for our artifacts directory
    const waveContract = await waveContractFactory.deploy(); //hardhat creates a local ethereum netwrok for us on this contract //deploying
    await waveContract.deployed() //we wait for the contract to be deployed to our local blockchain //constructor runs when deploy is executed
    console.log("Contract deployed to : ", waveContract.address);
    
    console.log("Contract deployed by:", owner.address);
   
    
    //get initial wave count
    let waveCount;
    let displayListOfWavers;
    let message;
    waveCount = await waveContract.getTotalWaves();

    // get wave function and wait
    let waveTxn = await waveContract.wave();
    await waveTxn.wait();

    // update wave count after wave function executed
    waveCount = await waveContract.getTotalWaves();
    
    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait()

    waveCount = await waveContract.getTotalWaves();

    displayListOfWavers = await waveContract.showWavers();
    console.log("These are the list of Wavers", displayListOfWavers);

    message = await waveContract.getMessage();
    console.log('Djs message says:', message);

}

// Testing Contract

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

runMain()