import type {ReactElement, ReactNode} from 'react'
import {ChakraProvider} from "@chakra-ui/react"
import Layout from '../components/layouts/main';
import {AppProps} from "next/app";
import {NextPage} from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type WebsiteProps = AppProps & {
    Component: NextPageWithLayout
}


const Website = ({Component, pageProps, router}: WebsiteProps) => {

    const getLayout = Component.getLayout ?? (page => page)

    return (
        <ChakraProvider>
            <Layout router={router}>
                {getLayout(<Component {...pageProps} key={router.route}/>)}
            </Layout>
        </ChakraProvider>
    )
}

export default Website