import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native'

export default class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			consumido: 0, 
			status: ' ', 
			pct: 0
		}

		this.adicionarCopo = this.adicionarCopo.bind(this)
		this.atualizar = this.atualizar.bind(this)
		this.zerar = this.zerar.bind(this)
	}

	atualizar() {
		let s = this.state
		s.pct = Math.floor(((s.consumido / 2000) * 100))

		if (s.pct === 0){
			s.status = ' '
		}else if(s.pct>0 && s.pct<100){
			s.status = 'Ruim'
		}else if (s.pct>=100 && s.pct<=150){
			s.status = 'Bom'
		} else {
			s.status = 'Oloco Meu'
		}


		this.setState(s)

	}

	adicionarCopo() {
		let s = this.state
		s.consumido += 200
		this.setState(s)

		this.atualizar()
	}

	zerar() {
		let s = this.state
		s.consumido = 0
		s.pct = 0
		s.status = ' '

		this.setState(s)
	}


	render() {
		return (
			<View style={styles.body}>
				<ImageBackground source={require('./images/waterbg.png')} style={styles.bgimage}>
					<View>
						<View style={styles.infoArea}>
							<View style={styles.area}>
								<Text style={styles.areaTitulo}>Meta</Text>
								<Text style={styles.areaDado}>2000ml</Text>
							</View>
							<View style={styles.area}>
								<Text style={styles.areaTitulo}>Comsumido</Text>
								<Text style={styles.areaDado}>{this.state.consumido}ml</Text>
							</View>
							<View style={styles.area}>
								<Text style={styles.areaTitulo}>Status</Text>
								<Text style={styles.areaDado}>{this.state.status}</Text>
							</View>
						</View>

						<View style={styles.pctArea}>
							<Text style={styles.pctTexto}>{this.state.pct}%</Text>
						</View>

						<View style={styles.btnArea}>
							<Button title='Beber 200ml' onPress={this.adicionarCopo}></Button>
						</View>
						<View style={[styles.btnArea]}>
							<Button title='Zerar' onPress={this.zerar}></Button>
						</View>

					</View>
				</ImageBackground>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		paddingTop: 20,
	},
	bgimage: {
		flex: 1,
		width: null,
	},
	infoArea: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 70,
	},
	area: {
		flex: 1,
		alignItems: 'center'
	},
	areaTitulo: {
		color: '#45b2fc',
		fontWeight: 'bold'
	},
	areaDado: {
		color: '#2b4274',
		fontSize: 15,
		fontWeight: 'bold'
	},
	pctArea: {
		marginTop: 200,
		alignItems: 'center'
	},
	pctTexto: {
		fontSize: 70,
		fontWeight: 'bold',
		color: '#FFFFFF',
		backgroundColor: 'transparent'
	},
	btnArea: {
		marginTop: 30,
		alignItems: 'center'
	},
	btnZerar: {
		backgroundColor: 'gray'
	}
})