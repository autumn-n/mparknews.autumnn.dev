import React from "react"
import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from "../lib/posts"
import Link from "next/link"
import Date from "../components/date"
import { GetStaticProps } from "next"

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingSm}>
        <p>
          SlackBot 을 원하는 Workspace/Channel 에 설치 하시면 <br />
          새로 등록된 엠팍 인기 담장글을 Slack 으로 전달해 드립니다.
        </p>
      </section>
      <section className={utilStyles.headingSm}>
        <p>
          <a href="https://slack.com/oauth/v2/authorize?client_id=1144615767073.1132261304019&scope=incoming-webhook">
            <img
              alt="Add to Slack"
              height="40"
              width="139"
              src="https://platform.slack-edge.com/img/add_to_slack.png"
              srcSet={
                "https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
              }
            />
          </a>
        </p>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
