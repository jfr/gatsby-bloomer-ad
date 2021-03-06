import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import {
  Section,
  Container,
  Title,
  Column,
  Content,
  Button,
  Icon,
} from "bloomer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { Subtitle } from "bloomer/lib/elements/Subtitle"
import { Columns } from "bloomer/lib/grid/Columns"

const IndexPage = ({ data }) => {
  const page = data.site.siteMetadata
  return (
    <Layout>
      <SEO title="Home" />
      <Hero siteTitle={page.title} description={page.description} />

      <Section>
        <Container>
          {/* Intro section  */}
          <Columns>
          <Column isSize="1/2">
            <Title>Traumhaft schöne Gartengeschosswohnung in Überlingen am Bodensee</Title>

            <Content>

              <p>Ankommen und wohlfühlen!
Diese angebotene Wohnung liegt im Gartengeschoss einer
ansprechenden Wohneinheit mit nur 6 Wohnungen und besticht
durch ihren besonderen Charme. Es handelt sich um eine sehr
gepflegte Gartengeschosswohnung mit bodentiefer Verglasung.
</p>
<p>Die Wohnung ist <strong>barrierefrei</strong> und bequem über einen Fahrstuhl
zu erreichen. Beheizt wird der Wohn- und Eingangsbereich sowie
Bad und WC per Fußbodenheizung. Schlaf- und Zweitzimmer
über Heizkörper.</p><p>Ein aktueller Energieausweis liegt zur
Besichtigung vor. Das Hausgeld beläuft sich auf derzeit 318,00 €
im Monat.</p>


<div class="notification is-primary">
<p>Das Highlight der Wohnung ist eine große Terrasse mit liebevoll angelegtem Garten und Rasenfläche. Sie haben hier Sondernutzungsrecht</p>
</div>


<p>In der Innenausstattung ist eine moderne Einbauküche mit inbegriffen.</p>
<p>Zur Wohnung gehören außerdem noch ein Abstellraum und ein
Keller mit praktischem Stauraum.</p>
<p>In der großzügig gebauten
Tiefgarage sind der Wohnung zwei Stellplätze zugeteilt. Sie
können die Eigentumswohnung <strong>provisionsfrei von privat
erwerben.</strong></p>

<Subtitle>Ausstattung</Subtitle>
<p>Parkettböden Eiche hell, Badezimmer, WC dunkelgrau gefliest.
Ihre Waschmaschine und den Trockner stellen Sie im separaten
Gemeinschaftswaschraum auf, Aufstellung ggf. auch im
Badezimmer möglich.
Geschlossener Fahrradabstellraum neben der Tiefgarage.</p>

<Subtitle>Lage</Subtitle>
<p>Ruhige Seitenstraße in Stadtrandlage von Überlingen. Das
Stadtzentrum erreichen Sie mit Seesicht fussläufig in 15-20
Minuten, ebenso Ärzte, Apotheke, Einkaufsmöglichkeiten, Bäcker,
Gastronomie, alle Schultypen sowie den Bus- und DB Bahnhof
Stadtmitte.
Eine Stadtbushaltestelle ist nur wenige Schritte entfernt.
Der nahe Nellenbach oder der Wald und Wiesen laden zu
Freizeitaktivitäten ein.
Überlingen bietet eine Therme mit Sauna und direktem
Seezugang und verfügt über eine der schönsten Promenaden
am Bodensee. 2021 ist Überlingen Gastgeber der
Landesgartenschau mit vielen attraktiven Orten.
</p>

<div class="notification is-primary">Sie wohnen, wo andere Urlaub machen.</div>


<Subtitle>So leben Sie in Überlingen</Subtitle>
<p>Die Eigentumswohnung eignet sich für Familien mit Bedarf an
einem Kinderzimmer oder für Paare mit Freude an der Nutzung
des Sondereigentums von ca. 200 qm.
Die überdachte 35 qm Terrasse gehört auf der gesamten Länge
zur Wohnung und lädt zum Verweilen/Relaxen an der frischen
Luft ein.
Im gepflegten Gartengeschoss mit viel Grünbestand fühlen Sie
sich wohl und ungestört. Die liebevolle Pflege der Außenanlagen
übernehmen Gärtner und Hausmeisterservice.
Für Ihren Müll steht ein Müllraum im Bereich der TG zur Verfügung.
Die Wohnanlage besteht aus zwei 6 - Familienhäusern und wird von einer Hausverwaltung betreut. Eigentümerversammlungen
finden jährlich statt. Protokolle liegen vor. Jährlich treffen sich
Mieter und Eigentümer zum Sommerfest und genießen die
 Wohngemeinschaft.</p>


              <p>
                <Link to="/page-2/">
                  <Button
                    isColor="primary"
                    className="is-rounded"
                    id="btn-spaced"
                  >
                    <span>Details</span>
                    <Icon className="fa fa-arrow-right fa-sm" />
                  </Button>
                </Link>
              </p>


              
            </Content>
          </Column>
          <Column isSize="1/2">

          <div class="box"><img class="image" src="/static/wiu01.jpg"></img></div>
          <div class="box"><img class="image" src="/static/wiu03.jpg"></img></div>
          <div class="box"><img class="image" src="/static/wiu-terrasse.jpg"></img></div>
          <div class="box"><img class="image" src="/static/wiu04.jpg"></img> </div>                            


          </Column>
          </Columns>

          <section class="section has-large-spacing-bottom has-large-spacing-top is-centered is-full-width has-background-primary">
    <div class="columns is-multiline ">

<div class="column has-margin-auto has-text-centered">
        <h3 class="title is-size-3 is-size-3-tablet has-text-white">Lassen Sie sich diese Gelegenheit nicht entgehen!</h3>
            <div class="subtitle is-size-5 is-size-5-tablet has-text-white"><p><span>Fragen Sie jetzt diese einzigartige Immobilie an.</span></p></div>
            <p class="has-text-white"><strong class="has-text-white">Kontakt:</strong> <a href="mailto:wohneninueberlingen@aol.com" class="has-text-white">wohneninueberlingen@aol.com</a> | Tel. +49 162 2186362</p>
       
</div>
    </div>
    </section>

          {/* Features section begins */}
        </Container>
      </Section>
    </Layout>
  )
}

IndexPage.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }),
}
export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
