const tf = require("@tensorflow/tfjs");
import instrument_types from './instruments';


const INPUT_DIM = 416;

const DEFAULT_FILTER_BOXES_THRESHOLD = 0.01;
const DEFAULT_IOU_THRESHOLD = 0.4;
const DEFAULT_CLASS_PROB_THRESHOLD = 0.4;
