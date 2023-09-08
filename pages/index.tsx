import {Box, Container, Heading} from "@chakra-ui/react";

const App = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} alignContent="center">
                Hello, I&apos;m a front end developer based in React
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Chinh Nguyen
                    </Heading>
                    <p>Digital Craftzman (Developer)</p>
                </Box>
            </Box>
        </Container>
    )
}

export default App;