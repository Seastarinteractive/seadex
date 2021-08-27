This is SeadDEX, a fork of Uniswap on Moonriver (a kusama sidechain). Visit to try: https://seascape.finance.

This interface supports Testnets of all moonbeam + moonriver chain support.

If you woud like to expand it, then follow https://moonbeam.network/tutorial/deploying-uniswap-to-moonbeam/

**🏞If you want YOUR project to sail on the SeaDEX, you can contact us at listings@seascape.network (http://listings@seascape.network/)! We'll get back to you promptly**

List of supported tokens could be found here:
https://tokenlists.org/token-list?url=https://cdn.seascape.network/seadex/seadex.tokenlist.json

Have fun :)

*The Seascape Network team!*

# Installation
You need docker and docker-compose in order to work with Seadex.

Pull this repository into your own machine. Open the terminal in the root folder of the project. And run the following code:

`docker-compose up -d`

If you run `docker-compose ps` to see list of running containers, you should see:

```      Name            Command       State           Ports
------------------------------------------------------------------
seadex-contracts   sh -c sleep 1d   Up      0.0.0.0:3000->3000/tcp
seadex-interface   sh -c sleep 1d   Up      0.0.0.0:3001->3000/tcp
seadex-sdk         sh -c sleep 1d   Up
```

The `seadex-contracts` container holds the Seadex smartcontracts. If you are planning to edit the smartcontracts or deploy them, you should enter into the container.
The `seadex-interface` container contains the Frontend interface that users see on https://seascape.finance. If you plan to edit the frontend, then you should enter into the container.
Finally, `seadex-sdk` container holds the library for frontend to interact with *Seadex Interface*. If you edit the supported Networks or Smartcontracts, then you should enter into this container.

# Seadex Interface

## Installation
Enter into the container:

`docker exec -it seadex-interface bash`

At first, we need to initialize the project modules:
`npm i`

Then, run the website to test if its working:

`npm run-script start`

If the website is running, you can visit the website on http://localhost:3001

## Deployment

Once you finish the code change and tested successfully on your network. Its time to deploy the code.

In the git client, commit your changes. Then checkout `released-interface` branch. Merge the changes that you made on another branch.
Re-enter into the container and run:

`npm i`

then

`npm run-script build`

Commit the compiled version of website on `released-interface` branch and push on github. Finally setup the server that checkouts the `released-interface` branch and shows it on your domain name. :)
