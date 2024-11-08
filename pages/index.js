import {useState} from 'react'

import Head from 'next/head'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Home() {
  // make a stateful variable for your rest data
  const [quoteData, setQuoteData] = useState()

  const getRandomQuote = async () => {
    // make the fetch request to kanye.rest
    const URL = "https://api.kanye.rest"
    const response = await fetch(URL, {
      method: "GET",
    })
    // unpacking the json from the rest api.
    const data = await response.json()
    console.log(data)
    // last step is to set the state
    setQuoteData(data)
  }


  return (
    <div>
      <Head>
        <title>Kanye's Keen Quotes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Kanye's Keen Quotes
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Typography variant="h5" align="center" color="text.primary" paragraph>
              { quoteData && // is quote data defined
                `${quoteData.quote}`
              }
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.secondary"
              gutterBottom
            >
              Kanye West
            </Typography>
            <Box
             display="flex"
             justifyContent="center"

            >
              <Button
                variant="contained"
                onClick={getRandomQuote}
              >
                Get New Quote
              </Button>
            </Box>
          </Box>
        </Container>
      </main>
    </div>
  )
}
