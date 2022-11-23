import {Component} from 'react'
import {
  Container,
  FirstDiv,
  Heading,
  Label1,
  Input1,
  Drop,
  Options,
  Button,
  SecondDiv,
  Para1,
  Form,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {values: 8, second: false, top: '', bottom: '', url: ''}

  change = event => {
    this.setState({values: event.target.value})
  }

  getImage = event => {
    event.preventDefault()
    this.setState(prevState => ({second: !prevState.second}))
  }

  getUrl = event => {
    this.setState({url: event.target.value})
  }

  topText = event => {
    this.setState({top: event.target.value})
  }

  bottomText = event => {
    this.setState({bottom: event.target.value})
  }

  getImageUrl = () => {
    const {url, top, bottom, values} = this.state
    return (
      <SecondDiv bgImage={url} fontSize={values} data-testid="meme">
        <Para1 fontSize={values}>{top}</Para1>
        <Para1 fontSize={values}>{bottom}</Para1>
      </SecondDiv>
    )
  }

  render() {
    const {values, second} = this.state
    return (
      <Container>
        <FirstDiv>
          <Form onSubmit={this.getImage}>
            <Heading>Meme Generator</Heading>
            <Label1 htmlFor="input1">Image URL</Label1>
            <Input1
              id="input1"
              placeholder="Enter the Image URL"
              onChange={this.getUrl}
            />
            <Label1 htmlFor="input2">Top Text</Label1>
            <Input1
              id="input2"
              placeholder="Enter the Top Text"
              onChange={this.topText}
            />
            <Label1 htmlFor="input3">Bottom Text</Label1>
            <Input1
              id="input3"
              placeholder="Enter the Bottom Text"
              onChange={this.bottomText}
            />
            <Label1 htmlFor="input4">Font Size</Label1>
            <Drop id="input4" onChange={this.change} value={values}>
              {fontSizesOptionsList.map(each => (
                <Options value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </Options>
              ))}
            </Drop>
            <Button type="button">Generate</Button>
          </Form>
        </FirstDiv>
        {second && this.getImageUrl}
      </Container>
    )
  }
}

export default MemeGenerator
