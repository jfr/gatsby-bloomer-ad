import React, { Component } from "react"
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Button,
  Columns,
  Column,
  Icon,
} from "bloomer"

export default class hero extends Component {
  render() {
    return (
      <Hero isColor="primary" isSize="medium" textalign="left">
        <HeroBody>
          <Container>
            <Columns>
              <Column isSize="1/2">
                {/* Headline */}
                <Title>{this.props.description}</Title>
                {/* Call to action button */}
                <Button
                  isColor="white"
                  isOutlined
                  href="mailto:wohneninueberlingen@aol.com?subject=Immobilienanfrage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="is-rounded"
                  id="btn-spaced"
                >
                  {/* Call to action button icon */}
                  <span>Jetzt anfragen</span>
                  <Icon className="fas fa-envelope fa-sm" />
                </Button>
                <p>- Nellenbachstraße, 88662 Überlingen/Bodensee</p>                
                <p>- 3,5 Zimmer</p>
                <p>- 126,00 m² Wohnfläche</p>
                <p>- Kaufpreis: 855.000 €</p>

              </Column>
            </Columns>
          </Container>
        </HeroBody>
      </Hero>
    )
  }
}
