import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { connect } from "@aragon/connect";
import { CuratedList } from "connect-thegraph-curated-list";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    width: 50%;
  }
`;

const Archivers = () => {
  useEffect(() => {
    const main = async () => {
      const org = await connect("0x5005e04882845575f7433796B0DF0858e901B544", "thegraph", {
        chainId: 4,
      });
      const apps = await org.apps();

      const { address } = apps.find(app => app.appName.includes("list.open"));

      const intent = await org.appIntent(address, "addArchiver", [
        "332332",
        "65s5d4asdaads33as4aasdq",
      ]);

      const path = await intent.paths("0x1d076fcf1598C285D1c2f0685202AfaCdBcB0832");

      for (const transaction of path.transactions) {
        let { children, description, descriptionAnnotated, ...parsedTransaction } = transaction;
        await signer.sendTransaction(parsedTransaction);
      }
    };
  }, []);

  const [twitterId, setTwitterId] = useState(null);
  const [message, setMessage] = useState(null);

  const handleTwitterIdChange = event => setTwitterId(event.target.value);

  const handleMessageChange = event => setMessage(event.target.value);

  const sendProposal = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const org = await connect("0x5005e04882845575f7433796B0DF0858e901B544", "thegraph", {
      chainId: 4,
    });
    const apps = await org.apps();

    const { address } = apps.find(app => app.appName.includes("list.open"));

    const intent = await org.appIntent(address, "addArchiver", [
      twitterId,
      "65s5d4asdaads33as4aasdq",
    ]);

    const path = await intent.paths("0x1d076fcf1598C285D1c2f0685202AfaCdBcB0832");

    for (const transaction of path.transactions) {
      let { children, description, descriptionAnnotated, ...parsedTransaction } = transaction;
      await signer.sendTransaction(parsedTransaction);
    }
  };

  return (
    <div>
      <p>Want to add an approved archiver?</p>
      <p>
        We need their Twitter ID, you can get it from{" "}
        <a href="http://gettwitterid.com/" target="_blank" rel="noopener noreferrer">
          here
        </a>
      </p>
      <Form>
        <TextField
          label="Twitter Id"
          rows={4}
          placeholder="994080172"
          variant="outlined"
          onChange={handleTwitterIdChange}
        />
        <TextField
          label="Message"
          multiline
          rows={4}
          placeholder="I should be accepted as an archiver because..."
          variant="outlined"
          onChange={handleMessageChange}
        />
        <Button variant="contained" color="primary" onClick={sendProposal}>
          Request Approval
        </Button>
      </Form>
    </div>
  );
};

export default Archivers;

// const curatedList = await new CuratedList(
// 	address,
// 	"https://api.thegraph.com/subgraphs/name/mauerv/aragon-registry-rinkeby-staging"
// );
// const members = await curatedList.members();
// console.log("Members", members);
