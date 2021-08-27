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


# Token List

Download https://cdn.seascape.network/seadex/seadex.tokenlist.json
You may add a new token to the list, you may remove token from the list. Or you can edit the parameters of an existing token in the list. Editing could include changing the *Name*, *Symbol*, *Address*, *Chain Id* or *Icon URL*.

All of the changes are straightforward except the *Icon URL* changing.

According to the Seascape format, the token icon urls are stored in https://cdn.seascape.network/currencies/. 

If there is need to change *Icon URL* then, upload a new version of icon onto CDN's *currencies/* folder. If there is a logo of the item, then new logo should be named with the iteration. Otherwise, name the icon with the token's symbol.

*For example, The CDN already have **currencies/rib.png**. We want to update it to set a new Icon for RIB token. In that case upload a new version of icon as **currencies/rib2.png**.*


## After Editing

Once you finished the changes, we need to update the version of the Token List. In the "version" parameter, we have three sub-parameters:

* major
* minor
* patch

Increment Major, if you added a new token. Increment minor if you removed token. Increment patch if you edited parameters of the current tokens.

*For example, we are editing Token list V.1.0.0. Our edition includes two token addition, one token removing, and five changes. Then the updated version of the token list version will be **3.1.5***

## Upload Token List

Open the *seadex/* folder in CDN. Rename the seadex.tokenlist.json to seadex.tokenlist.<version>.json. With doing so, we are archivating the token list.
After that, upload the edited token list as *seadex.tokenlist.json*
  
After a while, Seadex frontend should update the token list.
