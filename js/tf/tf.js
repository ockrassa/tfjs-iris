// Notice there is no 'import' statement. 'tf' is available on the index-page
// because of the script tag above.

// Define a model for linear regression.
const IRIS_CLASSES = ['setosa', 'versicolor', 'virginica'];
const IRIS_NUM_CLASSES = IRIS_CLASSES.length;
const IRIS_DATA = [[5.1, 3.5, 1.4, 0.2, 0], [4.9, 3, 1.4, 0.2, 0], [4.7, 3.2, 1.3, 0.2, 0], [4.6, 3.1, 1.5, 0.2, 0], [5, 3.6, 1.4, 0.2, 0], [5.4, 3.9, 1.7, 0.4, 0], [4.6, 3.4, 1.4, 0.3, 0], [5, 3.4, 1.5, 0.2, 0], [4.4, 2.9, 1.4, 0.2, 0], [4.9, 3.1, 1.5, 0.1, 0], [5.4, 3.7, 1.5, 0.2, 0], [4.8, 3.4, 1.6, 0.2, 0], [4.8, 3, 1.4, 0.1, 0], [4.3, 3, 1.1, 0.1, 0], [5.8, 4, 1.2, 0.2, 0], [5.7, 4.4, 1.5, 0.4, 0], [5.4, 3.9, 1.3, 0.4, 0], [5.1, 3.5, 1.4, 0.3, 0], [5.7, 3.8, 1.7, 0.3, 0], [5.1, 3.8, 1.5, 0.3, 0], [5.4, 3.4, 1.7, 0.2, 0], [5.1, 3.7, 1.5, 0.4, 0], [4.6, 3.6, 1, 0.2, 0], [5.1, 3.3, 1.7, 0.5, 0], [4.8, 3.4, 1.9, 0.2, 0], [5, 3, 1.6, 0.2, 0], [5, 3.4, 1.6, 0.4, 0], [5.2, 3.5, 1.5, 0.2, 0], [5.2, 3.4, 1.4, 0.2, 0], [4.7, 3.2, 1.6, 0.2, 0], [4.8, 3.1, 1.6, 0.2, 0], [5.4, 3.4, 1.5, 0.4, 0], [5.2, 4.1, 1.5, 0.1, 0], [5.5, 4.2, 1.4, 0.2, 0], [4.9, 3.1, 1.5, 0.1, 0], [5, 3.2, 1.2, 0.2, 0], [5.5, 3.5, 1.3, 0.2, 0], [4.9, 3.1, 1.5, 0.1, 0], [4.4, 3, 1.3, 0.2, 0], [5.1, 3.4, 1.5, 0.2, 0], [5, 3.5, 1.3, 0.3, 0], [4.5, 2.3, 1.3, 0.3, 0], [4.4, 3.2, 1.3, 0.2, 0], [5, 3.5, 1.6, 0.6, 0], [5.1, 3.8, 1.9, 0.4, 0], [4.8, 3, 1.4, 0.3, 0], [5.1, 3.8, 1.6, 0.2, 0], [4.6, 3.2, 1.4, 0.2, 0], [5.3, 3.7, 1.5, 0.2, 0], [5, 3.3, 1.4, 0.2, 0], [7, 3.2, 4.7, 1.4, 1], [6.4, 3.2, 4.5, 1.5, 1], [6.9, 3.1, 4.9, 1.5, 1], [5.5, 2.3, 4, 1.3, 1], [6.5, 2.8, 4.6, 1.5, 1], [5.7, 2.8, 4.5, 1.3, 1], [6.3, 3.3, 4.7, 1.6, 1], [4.9, 2.4, 3.3, 1, 1], [6.6, 2.9, 4.6, 1.3, 1], [5.2, 2.7, 3.9, 1.4, 1], [5, 2, 3.5, 1, 1], [5.9, 3, 4.2, 1.5, 1], [6, 2.2, 4, 1, 1], [6.1, 2.9, 4.7, 1.4, 1], [5.6, 2.9, 3.6, 1.3, 1], [6.7, 3.1, 4.4, 1.4, 1], [5.6, 3, 4.5, 1.5, 1], [5.8, 2.7, 4.1, 1, 1], [6.2, 2.2, 4.5, 1.5, 1], [5.6, 2.5, 3.9, 1.1, 1], [5.9, 3.2, 4.8, 1.8, 1], [6.1, 2.8, 4, 1.3, 1], [6.3, 2.5, 4.9, 1.5, 1], [6.1, 2.8, 4.7, 1.2, 1], [6.4, 2.9, 4.3, 1.3, 1], [6.6, 3, 4.4, 1.4, 1], [6.8, 2.8, 4.8, 1.4, 1], [6.7, 3, 5, 1.7, 1], [6, 2.9, 4.5, 1.5, 1], [5.7, 2.6, 3.5, 1, 1], [5.5, 2.4, 3.8, 1.1, 1], [5.5, 2.4, 3.7, 1, 1], [5.8, 2.7, 3.9, 1.2, 1], [6, 2.7, 5.1, 1.6, 1], [5.4, 3, 4.5, 1.5, 1], [6, 3.4, 4.5, 1.6, 1], [6.7, 3.1, 4.7, 1.5, 1], [6.3, 2.3, 4.4, 1.3, 1], [5.6, 3, 4.1, 1.3, 1], [5.5, 2.5, 4, 1.3, 1], [5.5, 2.6, 4.4, 1.2, 1], [6.1, 3, 4.6, 1.4, 1], [5.8, 2.6, 4, 1.2, 1], [5, 2.3, 3.3, 1, 1], [5.6, 2.7, 4.2, 1.3, 1], [5.7, 3, 4.2, 1.2, 1], [5.7, 2.9, 4.2, 1.3, 1], [6.2, 2.9, 4.3, 1.3, 1], [5.1, 2.5, 3, 1.1, 1], [5.7, 2.8, 4.1, 1.3, 1], [6.3, 3.3, 6, 2.5, 2], [5.8, 2.7, 5.1, 1.9, 2], [7.1, 3, 5.9, 2.1, 2], [6.3, 2.9, 5.6, 1.8, 2], [6.5, 3, 5.8, 2.2, 2], [7.6, 3, 6.6, 2.1, 2], [4.9, 2.5, 4.5, 1.7, 2], [7.3, 2.9, 6.3, 1.8, 2], [6.7, 2.5, 5.8, 1.8, 2], [7.2, 3.6, 6.1, 2.5, 2], [6.5, 3.2, 5.1, 2, 2], [6.4, 2.7, 5.3, 1.9, 2], [6.8, 3, 5.5, 2.1, 2], [5.7, 2.5, 5, 2, 2], [5.8, 2.8, 5.1, 2.4, 2], [6.4, 3.2, 5.3, 2.3, 2], [6.5, 3, 5.5, 1.8, 2], [7.7, 3.8, 6.7, 2.2, 2], [7.7, 2.6, 6.9, 2.3, 2], [6, 2.2, 5, 1.5, 2], [6.9, 3.2, 5.7, 2.3, 2], [5.6, 2.8, 4.9, 2, 2], [7.7, 2.8, 6.7, 2, 2], [6.3, 2.7, 4.9, 1.8, 2], [6.7, 3.3, 5.7, 2.1, 2], [7.2, 3.2, 6, 1.8, 2], [6.2, 2.8, 4.8, 1.8, 2], [6.1, 3, 4.9, 1.8, 2], [6.4, 2.8, 5.6, 2.1, 2], [7.2, 3, 5.8, 1.6, 2], [7.4, 2.8, 6.1, 1.9, 2], [7.9, 3.8, 6.4, 2, 2], [6.4, 2.8, 5.6, 2.2, 2], [6.3, 2.8, 5.1, 1.5, 2], [6.1, 2.6, 5.6, 1.4, 2], [7.7, 3, 6.1, 2.3, 2], [6.3, 3.4, 5.6, 2.4, 2], [6.4, 3.1, 5.5, 1.8, 2], [6, 3, 4.8, 1.8, 2], [6.9, 3.1, 5.4, 2.1, 2], [6.7, 3.1, 5.6, 2.4, 2], [6.9, 3.1, 5.1, 2.3, 2], [5.8, 2.7, 5.1, 1.9, 2], [6.8, 3.2, 5.9, 2.3, 2], [6.7, 3.3, 5.7, 2.5, 2], [6.7, 3, 5.2, 2.3, 2], [6.3, 2.5, 5, 1.9, 2], [6.5, 3, 5.2, 2, 2], [6.2, 3.4, 5.4, 2.3, 2], [5.9, 3, 5.1, 1.8, 2]];

function convertToTensors(data, targets, testSplit) {
	const numExamples = data.length;
	if (numExamples !== targets.length) {
		throw new Error('data y split tiene diferente longitud');
	}
	const numTestExamples = Math.round(numExamples * testSplit);
	const numTrainExamples = numExamples - numTestExamples;

	const xDims = data[0].length;

	//crear tensor de 2d para alojar data
	const xs = tf.tensor2d(data, [numExamples, xDims]);

	//crear 1D tensor para alojar labels y convertir a numero (one hot. Ej 0 -> [1, 0, 0])
	const ys = tf.oneHot(tf.tensor1d(targets).toInt(), IRIS_NUM_CLASSES);

	//dividir data entre data para test y training
	const xTrain = xs.slice([0, 0], [numTrainExamples, xDims]);
	const xTest = xs.slice([numTrainExamples, 0], [numTestExamples, xDims]);
	const yTrain = ys.slice([0, 0], [numTrainExamples, IRIS_NUM_CLASSES]);
	const yTest = ys.slice([0, 0], [numTestExamples, IRIS_NUM_CLASSES]);
	return [xTrain, yTrain, xTest, yTest];
}


function getIrisData(testSplit) {
	return tf.tidy(() => {
		const dataByClass = [];
		const targetByClass = [];
		for (let i = 0; i < IRIS_NUM_CLASSES; ++i) {
			dataByClass.push([]);
			targetByClass.push([]);
		}
		for (const example of IRIS_DATA) {
			const target = example[example.length - 1];
			const data = example.slice(0, example.length - 1);
			dataByClass[target].push(data);
			targetByClass[target].push(target);
		}
		console.log(dataByClass);
		console.log(targetByClass);
		const xTrains = [];
		const yTrains = [];
		const xTests = [];
		const yTests = [];
		for (let i = 0; i < IRIS_NUM_CLASSES; ++i) {
			const [xTrain, yTrain, xTest, yTest] =
				convertToTensors(dataByClass[i], targetByClass[i], testSplit);
			xTrains.push(xTrain);
			yTrains.push(yTrain);
			xTests.push(xTest);
			yTests.push(yTest);
		}
		const concatAxis = 0;
		const test1 = xTrains;
		const test2 = tf.concat(xTrains, concatAxis);
		console.log(test1);
		console.log(test2);
		return [
			tf.concat(xTrains, concatAxis), tf.concat(yTrains, concatAxis),
			tf.concat(xTests, concatAxis), tf.concat(yTests, concatAxis)
		];
	});
}

async function trainModel(xTrain, yTrain, xTest, yTest) {
	const model = tf.sequential();
	const learningRate = .01;
	const numberOfEpochs = 40;
	const optimizer = tf.train.adam(learningRate);
	console.log(xTrain.shape[1]);
	model.add(tf.layers.dense(
		{ units: 10, activation: 'sigmoid', inputShape: [xTrain.shape[1]]}// 1era capa: 10 renuronas, input = 4 y se activa con sigmoid (output 0..1, 1 = coincide, 0 no coincide)
	));

	model.add(tf.layers.dense(
		{ units: 3, activation: 'softmax'}//2da capa: 3 neuronas para las 3 tipos de flores, softmmax normaliza ounput para que sumen 1, prob para c/flor
	));

	model.compile({
		optimizer: optimizer,
		loss: 'categoricalCrossentropy',//Bueno para clasificar diferentes clases
		metrics: ['accuracy']
	});

	//entrenar
	const history = await model.fit(xTrain, yTrain,
		{ epochs: numberOfEpochs,
			validationData: [xTest, yTest],
			callbacks: {
				onEpochEnd: async (epoch, logs) => {
					console.log("Epoch: " + epoch + ", Logs: " + logs.loss);
					await tf.nextFrame();
				}
			}
	});
	return model;
}

async function doIris() {
	const [xTrain, yTrain, xTest, yTest] = getIrisData(.2); //80% para entrenamiento y 20 para pruebas

	model = await trainModel(xTrain, yTrain, xTest, yTest);

	const input = tf.tensor2d([5.8, 2.7, 5.1, 1.9], [1, 4]);

	const prediction = model.predict(input);
	alert(prediction);

	const predictionWithArgMax = model.predict(input).argMax(-1).dataSync();
	alert(predictionWithArgMax);

	//verificar cuantos acerto del conjunto de pruebas
	const xData = xTest.dataSync();
	const yTrue = yTest.argMax(-1).dataSync();

	const predictions = model.predict(xTest);
	const yPred = predictions.argMax(-1).dataSync();


	var correct = 0;
	var wrong = 0;

	for (var i = 0; i < yTrue.length; i++) {
		if (yTrue[i] == yPred[i]) {
			correct++;
		} else {
			wrong++;
		}
	}
	alert("Prediction error rate: " + (wrong / yTrue.length))
}
doIris();