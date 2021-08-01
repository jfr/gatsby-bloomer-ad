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
          <Subtitle>Schlafzimmer 1</Subtitle>
          <img class="image" src="/static/wiu-schlafen1.jpg"></img>
        </Column>
        <Column isSize="1/2">
          <Subtitle>Schlafzimmer 2</Subtitle>
          <img class="image" src="/static/wiu-schlafen2.jpg"></img>
        </Column>
      </Columns>

      <Columns>
        <Column isSize="1/2">
          <Subtitle>Wohnzimmer mit Küche</Subtitle>
          <img class="image" src="/static/wiu-wohnzimmer.jpg"></img>
          <br/>
          <Subtitle>Lichtdurchflutetes Wohnzimmer</Subtitle>
          <img class="image" src="/static/wiu01.jpg"></img>          
        </Column>
        <Column isSize="1/2">
          <Subtitle>Moderne offene Küche mit Bar</Subtitle>
          <img class="image" src="/static/wiu-kueche01.jpg"></img>
        </Column>
      </Columns>      

      <Columns>
        <Column isSize="1/3">
          <Subtitle>Badezimmer mit Badewanne, Dusche und WC</Subtitle>
          <img class="image" src="/static/wiu-bad.jpg"></img>


        </Column>
        <Column isSize="1/3">

          <Subtitle>Dusche und Badewanne</Subtitle>
          <img class="image" src="/static/wiu-bad02.jpg"></img>
        </Column>
        <Column isSize="1/3">
          <Subtitle>Gästebad</Subtitle>
          <img class="image" src="/static/wiu-gaestebad.jpg"></img>
        </Column>
        </Columns>

        
        <Columns>
        <Column isSize="1/3">
          <Subtitle>Genuss auf Ihrer Terrasse</Subtitle>
          <img class="image" src="/static/wiu-garten.jpg"></img>
        </Column>
        <Column isSize="1/3">
          <Subtitle>Schön angelegter Garten</Subtitle>
          <img class="image" src="/static/wiu-zeppelin.jpg"></img>
        </Column>
        <Column isSize="1/3">
          <Subtitle>Die gesamte Terrasse gehört Ihnen!</Subtitle>
          <img class="image" src="/static/wiu-gartensicht.jpg"></img>
        </Column>        
        </Columns>        

        <Columns>
        <Column isSize="1/2">
          <Subtitle>Die Stadt Überlingen (Sicht vom See)</Subtitle>
          <img class="image" src="/static/wiu-stadt.jpg"></img>
        </Column>
        <Column isSize="1/2">
          <Subtitle>Fußweg mit Seesicht von der Wohnung in die Stadt</Subtitle>
          <img class="image" src="/static/wiu-fussweg.jpg"></img>
        </Column>
        </Columns>      

        <Columns>
        <Column isSize="1/1">
          <Subtitle>Lage (Sicht vom Hausdach) </Subtitle>
          <img class="image" src="/static/wiu-lage.jpg"></img>
        </Column>
        </Columns>          

        <Columns>
        <Column isSize="1/2">
          <Subtitle>Malerisches Überlingen</Subtitle>
          <img class="image" src="/static/ueb.jpg"></img>
        </Column>
        <Column isSize="1/2">
          <Subtitle>Uferpromenade</Subtitle>
          <img class="image" src="/static/ueb2.jpg"></img>
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

    <section class="section has-large-spacing-bottom has-large-spacing-top is-centered is-full-width has-background-primary">
    <div class="columns is-multiline ">

    <div class="column has-margin-auto has-text-centered">
        <h3 class="title is-size-3 is-size-3-tablet has-text-white">Lassen Sie sich diese Gelegenheit nicht entgehen!</h3>
            <div class="subtitle is-size-5 is-size-5-tablet has-text-white"><p><span>Fragen Sie jetzt diese einzigartige Immobilie an.</span></p></div>
            <p class="has-text-white"><strong class="has-text-white">Kontakt:</strong> <a href="mailto:wohneninueberlingen@aol.com" class="has-text-white">wohneninueberlingen@aol.com</a> | Tel. +49 162 2186362</p>
     
</div>
    </div>
    </section>


  </Layout>
)

export default SecondPage
