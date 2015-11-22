/**
*
* Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
* Requires jQuery and Mapael
*
* Map of Pays de la Loire for Mapael
* Equirectangular projection
* 
* @author CCM Benchmark Group
* @source http://fr.m.wikipedia.org/wiki/Fichier:France_location_map-Departements.svg
*/
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'), require('mapael'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'mapael'], factory);
    } else {
        // Browser globals
        factory(jQuery, jQuery.fn.mapael);
    }
}(function ($, Mapael) {

	"use strict";

	$.extend(true, Mapael,
		{
			maps :  {
				france_region_52 : {
					width : 158.63092,
					height : 151.9375,
					getCoords : function (lat, lon) {
						var xfactor = 45.48385;
						var xoffset = 117.60305;
						var x = (lon * xfactor) + xoffset;
						
						var yfactor = -65.97284;
						var yoffset = 3204.0434;
						var y = (lat * yfactor) + yoffset;
						return {x : x, y : y};
					},
					elems : {
					    "department-44" : "m 49.49,48.34 c -0.62,0.47 0.6,1.44 0.1,1.98 -0.76,0.48 -1.83,0.28 -2.45,1.07 -0.86,0.62 -2.08,0.21 -2.95,0.89 -0.4,0.24 -0.53,0.82 -1.11,0.74 -1.04,0.51 -1.05,1.78 -1.24,2.74 -0.55,0.17 -0.78,1.05 -1.48,0.76 -0.66,-0.14 -1.58,-0.06 -1.76,0.65 -0.87,0.4 -1.74,-0.78 -2.53,0.02 -1.32,0.32 -2.7,-0.65 -4.06,-0.28 -0.75,0.21 -1.32,0.87 -2.16,0.79 -1.06,0.14 -1.85,0.89 -2.72,1.38 -0.67,-0.04 -0.03,-1.7 -0.83,-1.11 -0.71,0.59 -1.35,1.8 -2.43,1.41 -0.69,-0.11 -0.64,0.61 -0.89,0.98 -0.53,0.34 -1.47,0.01 -1.71,0.81 -0.42,0.44 -0.07,0.85 0.18,1.2 0.27,0.72 -0.19,1.34 -0.59,1.87 -0.06,0.94 0.07,1.9 -0.14,2.83 0.02,0.42 0.49,1.01 -0.16,1.18 -0.67,0.45 -1.91,0.3 -2.21,1.06 0.18,0.8 -0.23,2.06 -1.25,1.67 -0.75,-0.09 -0.18,-1.36 -1.03,-1.15 -0.92,0.01 -1.55,1.46 -2.46,0.76 -0.36,-0.25 -0.26,-0.98 -0.91,-0.82 -0.97,-0.41 -1.21,0.98 -1.48,1.6 -0.31,0.58 0.05,1.62 -0.88,1.69 -0.64,0.21 -1.39,0.46 -1.9,-0.12 -0.67,0.02 -1.45,0.69 -2.07,0.09 -0.34,-0.5 -0.72,-1.01 -1.25,-0.29 -1,0.62 -0.36,2 -0.45,2.93 0.65,0.56 1.97,-0.02 2.54,0.67 0.14,0.56 -0.55,0.81 -0.92,0.43 -0.6,-0.19 -0.94,0.41 -1.23,0.76 -0.24,-0.92 -1.59,-1.5 -2.27,-0.66 -0.81,0.74 -1.72,1.35 -2.71,1.78 -0.32,0.68 0.75,0.4 1,0.81 0.64,0.43 1.03,1.09 1.26,1.78 1.27,0.32 2.53,1.35 2.85,2.66 -0.82,1.77 -2.89,0.4 -3.99,-0.28 -0.44,-0.2 -1.07,0.42 -0.47,0.68 1.61,0.81 3.28,1.63 4.96,2.24 0.3,-0.48 0.09,-1.72 1.03,-1.39 1.14,0.04 2.51,0.35 3.01,1.45 0.84,0.74 2.16,1.99 3.26,0.97 0.6,-0.55 1.35,-0.89 2.06,-1.22 0.63,-0.5 1.57,-0.72 1.79,-1.64 0.26,-0.99 1.16,-1.64 2.2,-1.46 1.54,0.16 3.11,0.07 4.53,-0.53 1.23,-0.25 2.51,0.47 3.38,1.24 0.58,0.87 1.8,-0.06 2.58,0.54 2.07,0.83 3.18,2.86 4.82,4.23 0.81,0.62 1.96,0.85 2.81,1.16 -1.34,0.17 -3.04,0.27 -3.84,-1.05 -1.19,-1.04 -3.09,-0.95 -4.05,-2.33 -0.22,-0.23 -0.46,-0.57 0.02,-0.52 0.39,-0.45 -0.54,-0.91 -0.93,-1.02 -0.48,0.01 -0.21,0.98 -0.77,0.59 -1.23,-0.21 -2.49,-0.41 -3.47,-1.26 -0.8,0.04 -1.39,0.85 -2.26,0.78 -1.35,0.28 -2.98,0.13 -4.12,0.97 -0.27,0.74 -0.18,1.55 -0.51,2.27 0.39,1.09 1.07,2.18 0.74,3.41 -0.06,0.89 -0.73,1.6 -1.65,1.54 -0.77,0.14 -1.83,0.65 -1.91,1.49 0.58,0.19 1.03,0.85 1.76,0.62 1.26,0.05 2.44,0.61 3.7,0.7 2.55,0.77 4.57,2.67 5.86,4.95 0.43,0.52 1.28,0.49 1.46,1.26 0.35,0.79 0.89,1.75 1.88,1.68 0.31,1.19 1.2,2.46 2.57,2.47 0.51,0.17 1.78,-0.14 1.71,0.7 -0.28,1.1 1.3,0.99 1.97,1 0.94,-0.1 1.88,-0.11 2,1 0.13,0.66 0.19,2.08 1.24,1.8 0.71,-0.45 1.34,-0.01 1.88,0.47 0.65,0.33 1.4,-0.12 2.09,0.25 1.09,0.14 2.13,0.86 3.22,0.76 0.27,-0.46 0.69,-0.79 1.27,-0.78 0.44,-0.09 1.54,-0.46 0.86,-1.03 -0.56,-0.69 -1.57,-1.4 -1.65,-2.27 0.41,-0.03 1.2,-0.14 0.91,-0.76 -0.94,-1.08 -1.71,-2.62 -1.11,-4.05 0.26,-0.5 -0.64,-0.99 0.07,-1.34 0.9,-0.3 1.54,-1.05 2.33,-1.52 0.76,0.06 1.3,0.83 1.15,1.57 0.07,0.82 0.68,1.77 -0.1,2.41 -0.12,0.83 1,1.51 0.45,2.39 -0.17,0.36 -0.35,1.43 0.37,1.09 1.01,-0.54 1.95,-1.15 3.06,-1.42 0.8,-0.2 1.04,-0.96 1.24,-1.63 -0.04,-0.55 -0.98,-0.86 -0.45,-1.44 0.35,-0.77 -0.12,-1.56 -0.17,-2.28 0.32,-0.58 1.04,-0.75 1.57,-0.9 0.58,0.31 1.55,1.03 1.88,0.03 0.4,-0.52 0.37,-1.13 0.36,-1.69 0.35,-0.6 1.14,-1.38 1.59,-0.45 0.85,0.67 1.73,1.27 2.48,2.07 1,0.71 2.71,1.47 3.65,0.29 0.32,-0.69 0.07,-1.69 -0.83,-1.7 -0.73,-0.25 -1.12,-0.93 -1.35,-1.58 -0.97,-0.38 -2.18,-0.6 -3.19,-0.25 -0.45,0.05 -0.55,-0.31 -0.18,-0.56 0.6,-0.42 0.79,-1.15 0.4,-1.77 -0.26,-0.66 0.75,-0.96 1.23,-1.12 0.77,-0.6 1.8,-1.39 1.91,-2.44 -0.22,-0.41 -0.62,-0.73 -0.6,-1.28 0.06,-0.47 -0.06,-0.88 -0.37,-1.24 0.11,-0.67 0.29,-1.46 -0.41,-1.91 -0.56,-0.33 -0.76,0.7 -1.36,0.67 -0.76,0.17 -1.32,-0.74 -1.81,-1.19 -0.84,-0.75 -0.1,-2.34 -1.37,-2.71 -0.82,-0.32 -1.89,0.17 -2.59,-0.35 0.51,-0.78 1.45,-1.26 2.11,-1.93 1.02,-0.8 2.41,-0.4 3.52,-1 0.97,-0.1 2.02,-0.18 2.72,-0.96 1.3,-0.59 2.82,-0.01 4.17,-0.47 1.3,0.1 2.61,0.47 3.89,-0.02 1.14,-0.26 2.38,-0.9 3.04,-1.89 -0.35,-0.83 -1.15,-1.56 -1.11,-2.55 0.02,-0.82 -0.65,-1.47 -0.7,-2.22 0.33,-0.45 0.29,-1.24 -0.41,-1.2 -0.8,-0.01 -1.71,0.16 -2.25,-0.57 -1.79,-0.7 -3.96,0.29 -5.7,-0.61 -0.51,-0.45 -1.16,-1.28 -0.51,-1.89 0.17,-0.65 -1.03,-0.46 -0.79,-1.19 -0.06,-1 0.38,-1.49 1.41,-1.11 1.62,0.02 3.31,0.53 4.9,0.19 0.37,-0.46 1.6,-0.78 1.17,-1.53 -1.12,-0.8 -2.69,-0.66 -3.76,-1.6 -0.81,-0.39 -1.98,0.08 -2.46,-0.92 -0.6,-0.6 -0.09,-1.9 -1.11,-2.09 -0.52,-0.86 0.17,-2.03 -0.59,-2.85 -0.26,-0.49 -0.65,-1.04 -1.25,-0.96 -0.68,-0.27 -2.02,-0.59 -1.85,-1.52 0.64,-0.16 1.16,-0.85 0.46,-1.31 -0.31,-0.37 0.04,-1.15 -0.66,-1.11 -1.61,-0.45 -3.22,-0.92 -4.79,-1.46 -0.51,-0.64 -0.87,-1.86 -1.88,-1.67 -0.99,-0.44 -2.02,-0.33 -3.02,-0.55 z",
					    "department-53" : "m 105.95,0.12 c -0.75,0.21 -1,1.18 -0.24,1.59 0.2,0.83 -1.1,0.89 -1.11,1.68 0.01,0.55 -0.85,0.5 -0.95,0.05 -0.56,-0.39 -1.69,-0.78 -1.91,0.19 -0.29,0.65 -1.06,0.96 -1.15,1.69 -0.62,-0.11 -1.04,-0.91 -1.7,-1.07 -0.26,-0.46 -0.79,-0.53 -1.31,-0.53 -0.8,-0.24 -1.77,-0.53 -2.36,0.28 -0.56,0.55 -1.4,-0.35 -1.97,0.29 -0.99,0.56 -1.36,2.05 -2.68,1.96 -1.42,-0.01 -2.35,1.4 -3.67,1.59 -0.3,-0.68 0.25,-2.18 -0.85,-2.23 -0.43,0.15 -0.34,0.89 -0.95,0.83 -0.5,-0.19 -1.74,-0.52 -1.74,0.32 0.1,0.41 1.19,0.65 0.41,1 -0.66,0.39 -1.75,1.22 -2.33,0.31 -0.45,-0.35 0.01,-1.53 -0.84,-1.31 -0.43,0.13 -1.16,0.9 -1.21,0.02 -0.21,-0.97 -0.94,-1.89 -1.76,-2.43 -0.9,0.09 -2.27,0.68 -2.88,-0.31 -0.14,-0.79 -1.1,-0.61 -1.66,-0.72 -0.38,0.29 -0.12,1.01 -0.7,1.23 -0.79,0.63 -1.81,0.52 -2.53,-0.17 -0.68,-0.41 -1.7,-1.47 -2.05,-0.19 -0.72,1.19 1.02,2.61 0.05,3.69 -0.89,0.94 -0.07,2.38 0.43,3.31 0.65,0.91 -0.03,2 0.28,3.01 -0.1,0.68 0.75,1.24 0.23,1.85 -0.7,1.11 -1.78,2 -2.02,3.35 -0.6,1.24 0.67,2.47 0.56,3.75 0.31,1.02 0.22,2.11 0.47,3.14 0.8,1.74 0.61,3.77 1.35,5.53 0.24,0.58 1.35,0.93 0.73,1.63 -0.51,1.2 0.18,2.35 0.46,3.48 -0.24,1.09 -1.64,1.72 -2.69,1.5 -0.69,0.08 -1.83,-0.72 -2.18,0.21 -0.07,0.92 -1.29,0.57 -1.48,1.39 -0.3,1.13 -0.25,2.36 -0.84,3.4 0.09,0.71 -0.52,1.03 -0.92,1.49 -0.16,0.56 0.6,1.24 -0.18,1.62 -0.27,0.35 -1.07,0.24 -0.86,0.88 0.17,0.83 -0.11,1.75 -0.68,2.3 0.34,0.71 1.29,0.95 1.79,1.57 0.68,0.31 1.59,1.01 2.33,0.63 -0.03,-0.61 0.62,-0.29 1.02,-0.3 1.26,0.16 2.41,0.82 3.74,0.7 1.16,-0.04 2.25,1.2 3.36,0.35 0.54,-0.31 0.13,-0.88 -0.34,-0.83 -0.1,-0.59 0.81,-1.45 1.26,-0.8 1.03,-0.08 1.58,0.98 2.37,1.49 0.61,0.37 1.48,1.11 2.18,0.74 -0.07,-0.78 1.24,-1.21 1.58,-0.46 0.43,0.15 0.86,0.27 1.07,0.72 0.44,0.35 1.17,-0.23 1.45,0.44 1.01,0.81 2.49,0.2 3.68,0.5 0.96,0.26 2.25,0.66 3.12,-0.05 0.43,-0.65 1.02,-1.29 1.89,-0.98 0.61,0.02 1.56,0.52 1.8,-0.36 0.32,-0.44 -0.06,-1.25 0.25,-1.58 1.3,-0.1 2.13,1 3.1,1.62 0.52,-0.03 0.96,-0.43 1.48,-0.45 0.2,-0.37 0.4,-0.84 0.89,-0.45 0.3,0.36 1.07,0.51 0.9,-0.18 -0.02,-0.7 -0.12,-1.94 -1.14,-1.62 -1.15,0.22 -1.68,-1.04 -1.92,-1.93 0.45,-0.76 1.22,-1.12 1.77,-1.75 0.5,-0.21 1.55,0.17 1.43,-0.63 0.51,-0.71 -0.15,-1.43 -0.89,-1.49 -0.87,-0.06 -0.55,-1.21 -0.54,-1.76 0.65,-0.28 0.96,-1.17 1.81,-1.05 1.27,-0.18 2.99,-0.18 3.76,-1.36 0.02,-0.54 -0.8,-0.7 -0.65,-1.31 -0.18,-0.7 -0.46,-1.36 -0.69,-2.02 -0.39,-0.43 -1.18,-0.56 -1,-1.35 0.09,-0.48 -0.31,-1.56 0.33,-1.74 0.92,0.31 1.82,-0.28 2.44,-0.89 0.75,-0.18 2.14,0.6 2.31,-0.56 0.14,-0.57 -0.79,-0.78 -0.4,-1.37 0.46,-0.56 1.17,-1.49 0.25,-2.04 -0.43,-0.14 -0.98,-0.59 -1.02,-1.01 0.43,-0.26 0.49,-0.71 0.17,-1.06 0.41,-1.18 2.01,-1.25 2.83,-2.05 0.52,-0.52 1.52,-0.95 1.59,-1.74 0.27,-0.59 -0.01,-1.21 -0.35,-1.74 -0.72,-1.42 0.61,-2.6 0.85,-3.91 -0,-0.84 -1.09,-1.27 -0.76,-2.2 0.03,-0.49 0.32,-1.09 0.87,-0.86 0.49,-0.32 -0.23,-1.17 0.45,-1.4 0.53,-0.49 1.13,-0.9 1.89,-0.66 0.84,0.12 1.73,-0.47 1.47,-1.41 -0.13,-1.2 0.18,-2.44 0.06,-3.6 -0.5,-0.67 -1.2,0.42 -1.84,0.22 -0.82,-0.03 -1.96,0.02 -2.46,-0.71 -0.18,-1.09 -0.23,-2.27 -1,-3.1 -0.21,-0.76 1.41,-0.93 0.81,-1.63 -0.89,-0.43 -1.55,-1.17 -2.24,-1.83 -0.54,-0.19 -1.14,-0.16 -1.67,-0.35 z",
					    "department-49" : "m 60.6,50.26 c -0.68,0.47 -0.5,1.55 -0.68,2.28 0.04,0.6 0.67,1.35 0.06,1.87 -0.82,-0.01 -0.33,0.92 0.17,1.04 0.58,0.46 1.46,0.13 2.01,0.48 0.13,0.94 1.29,1.46 0.89,2.5 -0.17,0.59 -0.04,1.23 0.57,1.44 0.48,0.85 0.45,2.3 1.67,2.56 0.75,-0.11 1.45,0.1 2.03,0.59 1,0.74 2.58,0.44 3.37,1.44 -0.1,0.76 -0.97,1.25 -1.54,1.68 -1.93,0.26 -3.92,-0.44 -5.85,-0.33 -0.44,0.6 -0.16,1.58 0.6,1.75 0.39,0.51 -0.7,0.92 -0.19,1.48 0.82,1.63 3.03,1.17 4.51,1.07 0.81,-0.04 1.85,-0.05 2.25,0.77 0.7,0.39 1.72,-0.32 2.32,0.18 0.52,0.63 -0.4,1.33 0.16,1.97 0.45,1.22 0.5,2.6 1.44,3.62 0.64,0.76 -0.61,1.34 -1.14,1.65 -2.06,1.6 -4.86,0.68 -7.26,0.92 -1.17,0.02 -2.5,-0.07 -3.32,0.92 -1.04,0.46 -2.22,0.4 -3.29,0.82 -1.24,-0.06 -2.43,0.39 -3.21,1.4 -0.79,0.47 -1.61,1.56 -0.08,1.08 0.9,-0.05 2.38,0.02 2.34,1.25 0.12,1.24 1.07,2.91 2.5,2.68 0.44,-0.3 0.83,-0.86 1.39,-0.39 0.87,0.53 0.01,1.58 0.6,2.23 0.18,0.69 0.09,1.53 0.71,2.01 0.07,1.22 -1.26,2.01 -2.1,2.69 -0.41,0.2 -1.1,0.23 -0.99,0.9 0.15,0.62 0.29,1.31 -0.27,1.79 0.27,0.63 1.48,0.25 2.14,0.49 0.67,0 1.24,0.38 1.31,1.05 0.4,0.75 1.33,0.91 2.07,1.11 -0.02,0.8 0.1,1.82 -0.85,2.13 -0.41,0.69 0.92,0.74 1.31,0.93 1.36,0.19 2.78,1.23 4.16,0.59 0.19,-0.37 0.71,-1.06 1.09,-0.49 0.54,0.09 0.97,0.37 1.26,0.85 0.58,0.66 1.24,-0.6 1.78,0.06 0.68,0.36 1.25,0.84 1.53,1.55 0.5,0.46 1.58,0.57 1.85,-0.19 0.75,-0.79 2.06,-0.42 2.7,-1.37 0.65,-0.5 1.16,0.33 1.62,0.64 0.54,0.01 1.1,-0.56 1.54,0.07 0.56,0.49 1.08,-0.33 1.7,-0.12 0.35,-0.08 0.42,-0.64 0.87,-0.38 0.96,0.1 2.09,0.46 2.96,0.1 0.77,-0.85 1.61,-1.7 2.47,-2.36 -0.16,-0.6 -0.79,-1.45 -0.24,-2.02 1.23,-0.67 2.72,-1.51 4.13,-1.13 -0.19,0.99 1.05,0.78 1.64,0.75 0.69,0.12 1.48,-0.13 1.43,-0.96 0.12,-0.92 1.15,-0.25 1.68,-0.63 0.67,-0.03 1.31,0.51 1.99,0.1 1.53,-0.96 3.5,-0.86 5.14,-0.27 0.58,-0.04 0.75,-1 1.44,-0.6 0.43,0.26 1.25,-0.08 1.52,0.37 -0.14,0.88 -1.6,1.11 -1.46,2.04 0.47,0.29 1.41,-0.21 1.66,0.5 0.12,0.75 1.16,0.05 1.34,-0.38 0.2,-0.73 0.19,-2 1.13,-2.18 0.64,0.28 1.83,0.91 2.33,0.14 0.12,-0.52 -0.67,-0.68 -0.35,-1.24 0.39,-1.54 1.31,-2.96 2.63,-3.86 0.29,0.68 1.2,1.02 1.67,0.34 0.64,-0.67 -0.18,-1.47 0.07,-2.18 0.97,-1.21 0.28,-2.85 0.96,-4.19 0.41,-0.69 0.04,-1.55 0.64,-2.18 0.6,-0.68 0.82,-1.66 1.44,-2.28 0.95,0 0.96,-1.18 0.86,-1.84 0.67,-0.24 1.91,-0.88 1.22,-1.74 -0.09,-0.33 -0.62,-0.57 -0.65,-0.83 0.74,-0.59 1.52,-1.34 1.23,-2.39 -0.27,-1.97 1.54,-3.35 1.76,-5.19 0.17,-0.88 -1.29,-0.83 -1.16,-1.65 0.54,-0.8 0.54,-1.91 1.37,-2.48 0.25,-0.6 0.54,-1.66 -0.07,-2.1 -0.4,-0.11 -0.85,0.52 -0.99,-0.16 -0.63,-0.58 -0.73,0.53 -0.94,0.91 -0.5,0.38 -1.04,0.77 -1.52,1.15 -0.46,-0.17 -0.54,-0.99 -1.19,-0.92 -0.24,-0.36 -0.56,-0.69 -1.09,-0.6 -1.01,-0.07 -2.21,0.15 -2.93,-0.74 -0.7,-0.26 -1.22,-0.79 -1.39,-1.53 -0.2,-0.67 -0.81,0.01 -1.14,-0.04 -0.52,-0.65 -1.48,-0.51 -2.17,-0.92 -0.52,-0.14 -1.06,0.14 -1.49,-0.21 -0.79,0.15 -0.08,1.46 -0.99,1.4 -0.65,0.33 -1.16,-0.1 -1.63,-0.49 -0.69,-0.34 -2.03,-0.04 -1.89,-1.19 -0.06,-0.75 -1.15,-1.42 -0.75,-2.17 0.69,-0.18 1.82,-1.03 1.16,-1.78 -0.73,-0.54 -1.37,0.67 -1.98,0.92 -0.64,0.44 -1.31,-0.47 -2,-0.5 -1.3,-0.35 -2.69,-0.32 -4.01,-0.06 0.17,-0.61 0.23,-1.35 -0.39,-1.7 -0.42,-0.64 -0.25,-2.01 -1.28,-2.07 -0.37,0.15 -0.37,0.72 -0.89,0.46 -0.79,-0.17 -1.46,1.04 -1.98,0.05 -0.67,-0.65 -1.48,-1.26 -2.41,-1.42 -0.13,0.71 -0.04,1.95 -0.9,2.28 -1.03,-0.22 -2.45,-0.57 -3.03,0.62 -0.7,0.87 -2.03,0.21 -2.97,0.29 -1.19,-0.29 -2.43,-0.11 -3.61,-0.21 -0.41,-0.5 -0.98,-0.9 -1.66,-0.69 -0.67,-0.46 -1.37,-1.3 -2.3,-1.19 -0.51,0.2 0.03,1.33 -0.71,0.98 -0.88,-0.31 -2.01,-0.41 -2.45,-1.33 -0.44,-0.52 -1.03,-0.84 -1.67,-0.92 -0.33,-0.4 -1.43,-0.46 -1.13,0.3 0.31,0.27 0.63,0.83 0.11,1.08 -1.15,0.87 -2.39,-0.34 -3.64,-0.24 -1.46,0.13 -2.75,-0.98 -4.18,-0.71 -0.25,0.51 -0.82,0.53 -1.31,0.25 -1.15,-0.31 -2.04,-1.12 -2.97,-1.79 -0.07,-0.03 -0.14,-0.03 -0.21,-0.02 z",
					    "department-85" : "m 58.66,98.27 c -0.88,0 -0.68,0.94 -0.76,1.52 -0.27,0.43 -0.44,1.02 -0.54,1.47 -0.94,0.31 -1.66,-1.07 -2.56,-0.33 -0.74,0.21 -0.77,0.98 -0.46,1.57 0.4,0.66 -0.4,1.34 -0.01,1.93 0.59,0.33 0.4,1.12 0.05,1.53 -0.04,1.09 -1.56,1.01 -2.29,1.41 -0.76,0.22 -1.38,1.06 -2.15,1.08 -1.08,-0.58 0.39,-1.58 -0.16,-2.39 -0.4,-0.6 -0.72,-1.43 -0.12,-2.01 0.02,-1 -0.22,-2.16 -0.85,-2.96 -0.92,-0.41 -1.35,1 -2.24,1.03 -0.56,0.12 -0.7,0.68 -0.37,1.09 -0.1,0.84 -0.64,1.72 -0.04,2.53 0.24,0.65 0.64,1.27 1.12,1.72 0.18,0.62 -0.38,0.98 -0.75,1.31 0.14,0.95 1.47,1.39 1.66,2.34 -0.43,0.66 -1.3,0.69 -1.9,1.03 -0.19,0.38 -0.42,0.86 -0.92,0.56 -1.32,-0.54 -2.7,-0.94 -4.13,-1.01 -0.99,0.4 -1.51,-1.17 -2.48,-0.61 -0.91,0.42 -1.54,-0.61 -1.42,-1.41 -0.03,-0.75 -0.55,-1.59 -1.41,-1.26 -0.95,0.03 -1.88,-0.17 -2.8,-0.32 0.36,-1.07 -0.08,-1.66 -1.19,-1.39 -1.46,0.07 -2.82,-1.11 -3,-2.52 -0.36,-0.31 -1.05,-0.09 -1.23,-0.68 -0.51,-0.57 -0.75,-1.98 -1.75,-1.78 -1.71,0.69 -2.3,2.61 -2.5,4.27 -0.08,1.03 -1.1,1.3 -1.91,1.55 -1.14,0.63 -0.85,2.39 -2.13,2.91 -0.53,1.28 -0.16,2.79 -0.33,4.16 1.58,3.1 5.64,3.93 7.03,7.19 0.33,0.95 0.84,2.05 2.02,2.04 1.48,0.66 1.31,2.76 2.72,3.56 1.25,0.83 0.82,2.89 2.2,3.54 0.43,-0.02 -0.16,0.62 0.04,0.92 0.37,1.99 0.57,4.08 1.24,5.98 0.64,0.29 1.11,-0.75 0.6,-1.18 -0.14,-0.32 -0.2,-1.22 0.2,-1.22 0.41,1.08 0.79,2.33 2.01,2.76 1.37,0.68 2.49,2.19 4.09,2.28 0.39,-0.16 1.15,-0.5 1.18,0.21 0.12,0.49 -0.8,1.37 0.1,1.43 1.72,0.23 3.58,-0.18 5.22,0.38 1.79,0.79 1.94,2.9 2.38,4.56 0.27,0.94 1.49,0.7 2.15,0.33 0.61,-0.1 1.35,0.12 1.79,-0.37 1.32,0.16 1.96,1.68 3.12,2.19 0.53,-0.07 -0.12,-1.21 0.44,-0.51 1.06,1 1.88,2.37 3.06,3.23 0.68,-0.51 0.01,-1.75 0.67,-2.37 0.73,-0.61 1.82,-1.33 2.77,-0.74 0.63,0.27 1.84,0.46 1.89,-0.5 0.36,-0.37 0.36,0.65 0.86,0.38 1.07,-0.53 1.34,-2.24 2.76,-2.19 1.07,-0.18 2.48,0.08 3.12,-1 0.56,0.06 1.14,-0.03 1.62,-0.36 -0.12,1.09 -0.64,2.08 -1.05,3.05 0.49,0.89 1.96,0.74 2.69,0.2 0.5,-0.63 1.36,-0.17 1.91,-0.03 0.21,-0.42 0.16,-1.29 0.85,-1.28 0.49,0.46 1.23,-0.27 1.63,0.12 -0.16,0.35 -0.33,0.85 0.21,0.99 1.04,0.28 1.86,1.61 3.01,1.28 0.34,-0.26 0.14,-0.86 0.69,-0.9 0.37,-0.31 0.8,-0.63 1.26,-0.21 0.66,0.36 2.11,0.53 2.07,-0.58 0.33,-0.71 1.55,-0.77 1.54,-1.72 0.75,-0.45 1.99,0.13 2.39,-0.94 0.42,-0.36 0.79,-1.31 -0.05,-1.39 -0.89,-0.16 -1.47,-1.08 -2.33,-1.2 -0.47,0.27 -0.41,1.6 -1.15,1.11 -0.52,-0.68 -0.33,-1.75 -0.3,-2.58 0.54,-0.45 1.16,-1.07 0.98,-1.89 -0.11,-0.73 -0.78,-1.25 -0.55,-2.01 -0.17,-0.74 -1.02,-1.5 -0.57,-2.27 0.56,-0.26 1.76,0 1.58,-0.99 0.12,-0.76 -0.34,-1.31 -0.74,-1.86 -0.42,-0.69 0.52,-1.3 0.03,-2.01 -0.6,-0.55 0.49,-1.34 -0.18,-1.9 -0.33,-0.57 -1.01,-0.58 -1.52,-0.52 0.04,-0.81 1.13,-1.79 0.16,-2.46 -0.71,-0.51 -1.42,-0.99 -0.46,-1.6 0.52,-0.93 -0.78,-1.65 -1.33,-2.23 -0.34,-0.42 -0.05,-1.28 -0.81,-1.32 -0.94,-0.76 -0.77,-2.39 -0.16,-3.33 0.57,-0.31 0.65,-1.36 -0.17,-1.29 -0.65,0.06 -1.01,-0.61 -1.65,-0.62 -1.52,-0.83 -2.08,-2.76 -3.53,-3.63 0.31,-0.86 1.09,-2.13 0.04,-2.79 -0.58,-0.58 -1.23,-1.17 -2.07,-1.18 -0.69,-0.22 0.28,-0.82 -0.27,-1.23 -0.09,-0.48 -1.18,-0.14 -0.84,-0.68 0.52,-0.82 -0.7,-1.53 -1.33,-1.84 -0.64,-0.15 -1.39,0.53 -1.85,-0.24 -0.49,-0.45 -1.53,-1.29 -1.91,-0.25 -0.23,0.67 -1.23,0.16 -1.75,0.19 -1.83,-0.38 -3.6,-0.96 -5.3,-1.74 -1.61,-0.33 -2.49,-1.86 -3.92,-2.46 -0.28,-0.26 -0.51,-0.7 -0.95,-0.67 z",
					    "department-72" : "m 129.3,5.54 c -0.71,0.34 -1.45,0.53 -2.26,0.64 -0.72,0.18 -1.32,0.65 -2.04,0.77 -0.23,0.34 -0.15,0.74 -0.7,0.7 -0.36,0.24 -0.04,0.91 -0.67,0.85 -0.62,0.15 -1.76,0 -1.79,0.9 -0.11,0.87 -1.01,0.93 -1.67,1.15 -0.6,0.24 -0.58,0.94 -0.53,1.41 -0.91,0.6 -2.12,0.29 -2.74,-0.56 -0.65,-0.64 -0.99,0.49 -1.58,0.59 -0.61,0.39 -1.37,0.41 -1.96,0.74 -0.83,-0.1 -1.73,-0.19 -2.31,0.53 -0.79,0.39 0.2,1.2 0.03,1.68 -0.4,-0.22 -1.35,-0.54 -1.29,0.25 -0.22,1.14 1.18,1.93 0.56,3.07 -0.57,1.05 -1.36,2.35 -0.55,3.51 0.41,0.53 0.4,1.11 0.29,1.7 0.15,0.73 -1.11,0.65 -1.32,1.26 -0.73,1.08 -2.32,1.14 -3.09,2.12 -0.02,0.37 0.52,0.66 0.02,1 -0.45,0.7 0.5,1.1 0.94,1.4 0.54,0.49 0.31,1.11 -0.16,1.53 -0.44,0.44 -0.32,1.08 0.17,1.39 -0.06,0.62 -0.11,1.62 -0.99,1.19 -0.67,-0.11 -1.47,-0.22 -1.93,0.38 -0.6,0.45 -1.37,0.54 -2.06,0.57 -0.24,0.67 -0.27,1.65 0.16,2.25 0.53,0.23 1.08,0.49 0.96,1.19 0.18,0.93 0.63,1.8 1.22,2.49 -0.28,0.89 -1.45,1.3 -2.28,1.53 -1.23,0.08 -3.01,0.07 -3.38,1.57 -0.28,1.22 1.68,1.22 1.58,2.36 -0.3,0.34 0.11,1.19 -0.6,1.07 -0.6,-0.04 -1.31,0.14 -1.46,0.75 -0.92,-0.07 -1.5,1.27 -0.98,2.01 0.29,1.38 2.65,0.01 2.53,1.59 0.34,1.3 -0.06,2.86 0.94,3.94 0.28,0.36 -0.29,1.32 0.47,1.06 0.86,-0.7 1.89,0.08 2.85,-0.16 0.94,0.04 1.9,1.35 2.76,0.49 0.64,-0.4 1.19,-1.36 1.95,-0.6 0.57,0.15 0.54,0.59 0.11,0.9 -0.35,0.53 -0.88,0.84 -1.37,1.13 -0.12,0.9 0.86,1.52 0.92,2.41 0.29,0.58 0.97,0.39 1.46,0.47 0.53,0.6 1.61,1.02 2.08,0.1 0.23,-0.3 0.44,-1.33 0.94,-1.09 0.38,0.61 1.25,0.11 1.76,0.62 0.58,0.2 1.23,0.16 1.69,0.59 0.39,-0.01 0.78,-0.69 1.03,-0.02 0.32,0.66 0.62,1.4 1.37,1.61 1,1.12 2.6,0.71 3.89,0.91 -0.01,0.66 0.93,0.53 1.11,1.15 0.53,0.5 0.78,-0.55 1.35,-0.49 0.56,-0.23 0.54,-0.94 0.68,-1.37 0.77,-0.08 1.45,0.42 2.27,0.21 0.63,-0.11 1.31,-0.08 1.61,0.56 0.92,0.62 2.25,0.18 2.96,1.19 0.66,0.67 2.31,1.52 2.81,0.28 -0.06,-0.89 -0.59,-1.68 -1.26,-2.2 -0.56,-0.6 0.26,-1.31 0.64,-1.77 1.04,-0.13 1.36,1.59 2.39,1.47 0.87,-0.14 0.78,-1.17 1.29,-1.63 0.75,-0.22 1.71,0.03 2.27,-0.66 0.68,-0.24 1.57,-0.06 1.98,-0.84 0.62,-0.47 1.6,-0.12 2.16,-0.78 0.52,-0.5 -0.77,-0.67 -0.61,-1.34 -0.11,-0.48 -0.83,-1.03 -0.12,-1.39 0.88,-0.35 1.19,-1.32 1.76,-2.01 0.76,-0.26 1.45,-0.67 2.08,-1.17 0.38,-0.11 1.33,0.38 1.17,-0.37 -0.49,-0.48 -0.07,-1.11 0.5,-1.19 0.83,-0.56 1.31,-1.47 1.79,-2.3 0.24,-0.45 0.68,-0.37 1.02,-0.58 0.44,-0.91 -0.68,-1.54 -0.47,-2.47 -0.09,-0.76 -0.3,-1.74 0.57,-2.14 0.38,-0.44 1.16,-0.5 1.23,0.21 0.03,0.54 0.73,0.48 0.57,-0.07 -0.07,-0.79 -0.31,-2.22 0.83,-2.32 0.84,-0.12 0.8,-1.06 0.37,-1.59 -0.28,-0.73 -1.25,-1.54 -0.47,-2.3 0.22,-0.67 0.72,-1.61 0.27,-2.25 -0.61,-0.05 -1.52,-0.02 -1.62,-0.83 -0.02,-0.51 -0.36,-1.31 0,-1.67 0.62,-0.3 2.07,0.06 1.98,-1 0.08,-0.71 -1.36,-0.29 -0.97,-0.98 0.94,-0.15 1.62,-1.19 1.41,-2.13 0.64,-0.72 1.96,0.05 2.67,-0.55 0.11,-1.1 -1.34,-1.5 -2.2,-1.67 -1.38,0.16 -1.97,-1.39 -3.19,-1.61 -0.74,-0.01 -1.37,1.06 -2.04,0.24 -1.26,-0.71 -1.67,-2.07 -2.45,-3.19 -0.35,-0.9 -1.18,-2.16 -2.31,-1.72 -0.85,0.3 0.12,1.24 -0.36,1.66 -0.42,-0.16 -0.75,-0.65 -1.31,-0.54 -1.04,-0.1 -2.25,-0.04 -3.13,-0.61 -0.19,-1.07 -1.84,-1.02 -1.97,-2.2 0.12,-0.42 0.4,-1.38 -0.38,-1.2 -0.62,0.44 -1.27,-0.29 -1.92,-0.04 -0.65,-0.02 -0.71,-0.77 -1.21,-0.93 -0.96,0.28 -1.96,-0.96 -1.69,-1.84 0.47,-0.75 -0.3,-1.68 -0.23,-2.5 -0.1,-0.76 -0.41,-1.6 0.07,-2.26 0.18,-0.77 -0.6,-1.2 -0.68,-1.92 -0.94,-1.26 -2.65,-2.16 -4.21,-2.27 z"
					}
				}
			}
		}
	);

	return $.fn.mapael;

}));