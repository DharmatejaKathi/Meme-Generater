import {Component} from 'react'
import {
  Container,
  FormContainer,
  Label,
  Input,
  Heading,
  CustomSelect,
  CustomOption,
  Button,
  MemeContainer,
  TextContent,
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
  state = {
    backgroundImageInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeInput: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSize: '',
  }

  onChangeUrl = event => {
    this.setState({backgroundImageInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({activeFontSizeInput: event.target.value})
  }

  onChangeMeme = event => {
    event.preventDefault()
    const {
      backgroundImageInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeInput,
    } = this.state
    this.setState({
      backgroundImageUrl: backgroundImageInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSize: activeFontSizeInput,
    })
  }

  renderForm = () => {
    const {
      backgroundImageInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeInput,
    } = this.state
    return (
      <FormContainer onSubmit={this.onChangeMeme}>
        <Heading>Meme Generator</Heading>
        <Label htmlFor="backgroundImageUrl">Image URL</Label>
        <Input
          type="text"
          id="backgroundImageUrl"
          value={backgroundImageInput}
          onChange={this.onChangeUrl}
          placeholder="Enter the Image URL"
        />
        <Label htmlFor="TopText">Top Text</Label>
        <Input
          type="text"
          id="TopText"
          value={topTextInput}
          onChange={this.onChangeTopText}
          placeholder="Enter the Top Text"
        />
        <Label htmlFor="BottomText">Bottom Text</Label>
        <Input
          type="text"
          id="BottomText"
          value={bottomTextInput}
          onChange={this.onChangeBottomText}
          placeholder="Enter the Bottom Text"
        />
        <Label htmlFor="select">Font Size</Label>
        <CustomSelect
          id="select"
          value={activeFontSizeInput}
          onChange={this.onChangeSelect}
        >
          {fontSizesOptionsList.map(each => (
            <CustomOption key={each.optionId} value={each.optionId}>
              {each.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <Button type="submit">Generate</Button>
      </FormContainer>
    )
  }

  renderMemePage = () => {
    const {backgroundImageUrl, topText, bottomText, activeFontSize} = this.state
    return (
      <MemeContainer bgImg={backgroundImageUrl} data-testid="meme">
        <TextContent fontSize={activeFontSize}>{topText}</TextContent>
        <TextContent fontSize={activeFontSize}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <Container>
        {this.renderForm()}
        {this.renderMemePage()}
      </Container>
    )
  }
}

export default MemeGenerator
