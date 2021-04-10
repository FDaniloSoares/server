import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import uuid from 'uuid';

var fakeCIDS = [{
    codigo: 'A01',
    descricao: 'Febres Tifoíde e Paratifóide'
  },
  {
    codigo: 'A99',
    descricao: 'Febres Hemorrágicas Virais Não Especificados'
  },
  {
    codigo: 'A89',
    descricao: 'Infecções Virais Não Especificadas do Sistema Nervoso Central'
  },
  {
    codigo: 'A77',
    descricao: 'Febre Maculosa (rickettsioses Transmitidas Por Carrapatos)'
  },
  {
    codigo: 'A96',
    descricao: 'Febre Hemorrágica Por Arenavírus'
  }];

var fakeCIDSVazio = [];

const app = express();

app.use(bodyParser.json());
app.use(cors());

// obtercids
app.get('/cids', (req, res) => {
    res.status(200).json(fakeCIDS);
});

// obter cids delay
app.get('/cids-delay', (req, res) => {
    setTimeout(() => res.status(200).json(fakeCIDS), 2000);
});

//obter cids com post de dados
app.post('/cids', (req, res) => {
    const { anamnese } = req.body;
    if (anamnese) {
        res.status(200).json(fakeCIDS);
    } else {
        res.status(400).json({ message: 'ERROR!!!' });
    }
});

app.post('/cids-delay', (req, res) => {
  setTimeout(()=>{
    // const dados = req.body;
    // res.status(200).json(dados);
    const { anamnese } = req.body.data;
    if (anamnese) {
        res.status(200).json(fakeCIDS);
    } else {
        res.status(400).json({ message: 'ERROR!!!' });
    }
  }, 1000)
  
});

app.listen(8080, () => console.log("Server listening on port 8080"));
