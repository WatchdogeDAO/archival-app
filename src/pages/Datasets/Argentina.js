import React from 'react';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import datasets from './argentina_snapshot.json';
import HashLink from '../../components/HashLink';

const VerifiabilityContainer = styled.div`
  margin: 16px auto;
`;
const Block = styled.div`
  margin-bottom: 16px;
`;

const Argentina = () => (
  <div>
    <VerifiabilityContainer>
      <Typography variant="h4" style={{marginBottom: '10px'}}>
        Storage
      </Typography>
      <Block>
        <Typography variant="h6">Full Data</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Deal Cid</TableCell>
                <TableCell>Deal Id</TableCell>
                <TableCell>Piece Cid</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>bafyreiailwdlxrjsujhhrpfhoxm2djby3dvck2q556undrdcvqicx6e7v4</TableCell>
                <TableCell>3201</TableCell>
                <TableCell>bafk4chzayi67fcy2hjkmzycfohqi6t6axxlyoe2f5akpumkchrqo7t2f746a</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Block>
      <Block>
        <Typography variant="h6">Snapshot Index</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{wordBreak: 'break-all'}}>
                <TableCell>Deal Cid</TableCell>
                <TableCell>Deal Id</TableCell>
                <TableCell>Piece Cid</TableCell>
                <TableCell>IPFS File</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow style={{wordBreak: 'break-all'}}>
                <TableCell>bafyreigvejeoi5q5m7b77jbm5zdtend42comhjo5twcuteh4p6577t7pni</TableCell>
                <TableCell>3202</TableCell>
                <TableCell>bafk4chzayi67fcy2hjkmzycfohqi6t6axxlyoe2f5akpumkchrqo7t2f746a</TableCell>
                <TableCell>3202</TableCell>
                <TableCell>
                  <HashLink hash={'QmWpRnnZDd1C1dxZH5SBHN58M6dEgwxuzhyVT9CAafmGYe'} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Block>
    </VerifiabilityContainer>
    <div>
      <Typography variant="h4" style={{marginBottom: '10px'}}>
        Datasets
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>IPFS Hash</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datasets.map(dataset => (
              <>
                <TableRow>
                  <TableCell>{dataset.distribucion_titulo}</TableCell>
                  <TableCell>{dataset.distribucion_descripcion}</TableCell>
                  <TableCell>
                    <HashLink hash={dataset.ipfsHash} />
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  </div>
);

export default Argentina;
