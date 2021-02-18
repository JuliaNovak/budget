import {
  Button,
  ButtonGroup,
  ButtonOr,
  Container,
  Form,
  FormGroup,
  FormInput,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
  Segment,
  Statistic,
  StatisticLabel,
  StatisticValue,
} from 'semantic-ui-react'
import './App.css'

function App() {
  return (
    <Container>
      <Header as='h1'>Budget</Header>

      <Statistic size='small'>
        <StatisticLabel>Your Balance:</StatisticLabel>
        <StatisticValue>2,550.53</StatisticValue>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <GridRow>
            <GridColumn>
              <Statistic size='tiny' color='green'>
                <StatisticLabel textAlign='left'>Income:</StatisticLabel>
                <StatisticValue>1,045.50</StatisticValue>
              </Statistic>
            </GridColumn>
            <GridColumn>
              <Statistic size='tiny' color='red'>
                <StatisticLabel textAlign='left'>Expenses:</StatisticLabel>
                <StatisticValue>6000</StatisticValue>
              </Statistic>
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <GridRow>
            <GridColumn width={10} textAlign='left'>
              Something
            </GridColumn>
            <GridColumn width={3} textAlign='right'>
              $10.00
            </GridColumn>
            <GridColumn width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <GridRow>
            <GridColumn width={10} textAlign='left'>
              Something else
            </GridColumn>
            <GridColumn width={3} textAlign='right'>
              $100.00
            </GridColumn>
            <GridColumn width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <GridRow>
            <GridColumn width={10} textAlign='left'>
              Something
            </GridColumn>
            <GridColumn width={3} textAlign='right'>
              $20.00
            </GridColumn>
            <GridColumn width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>

      <Header as='h3'>Add new transaction</Header>
      <Form unstackable>
        <FormGroup>
          <FormInput
            icon='tags'
            width={12}
            label='Description'
            placeholder='New shiny thing'
          />
          <FormInput
            width={4}
            label='Value'
            placeholder='100.00'
            icon='dollar'
            iconPosition='left'
          ></FormInput>
        </FormGroup>
        <ButtonGroup style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <ButtonOr />
          <Button primary>Ok</Button>
        </ButtonGroup>
      </Form>
    </Container>
  )
}

export default App
