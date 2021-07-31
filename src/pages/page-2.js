import React from "react"
import { Link } from "gatsby"
import {
  Section,
  Container,
  Title,
  Subtitle,
  Button,
  Icon,
  Column,
  Columns,
} from "bloomer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Wohnen in Überlingen - Details" />
    <Section className="has-background-white">
    <Container>
    <Title isSpaced>Fotos</Title>
      <Columns>
        <Column isSize="1/2">
          <Subtitle>Badezimmer mit Badewanne, Dusche und WC</Subtitle>
          <img class="image" src="/static/wiu-bad.jpg"></img>
        </Column>
        <Column isSize="1/2">
          <Subtitle>Dusche und Badewanne</Subtitle>
          <img class="image" src="/static/wiu-bad02.jpg"></img>
        </Column>
        </Columns>

        </Container>
      </Section>
    <Section className="has-background-white">
      <Container>

        <Columns>
          <Column>
            {/* Page title */}
            <Title isSpaced>Daten</Title>



            <div class="box">
            <Subtitle>Grundriss</Subtitle>
            <img class="image" src="/static/gartengeschoss.jpg"></img>
            </div>

            <div class="box">
            <Subtitle>Energieausweis</Subtitle>
            <img class="image" src="/static/energieausweis.png"></img>
            </div>
            <Link to="/">
              <Button isColor="primary" className="is-rounded" id="is-spaced">
                <Icon className="fa fa-arrow-left fa-sm" />
                <span>Zurück zur Startseite</span>
              </Button>
            </Link>
          </Column>
        </Columns>
      </Container>
    </Section>
  </Layout>
)

export default SecondPage
