/**
*
* Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
* Requires jQuery and Mapael
*
* Map of Rhone-Alpes for Mapael
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
				france_region_82 : {
					width : 159.56297,
					height : 158.72586,
					getCoords : function (lat, lon) {
						var xfactor = 45.48385;
						var xoffset = -168.4189;
						var x = (lon * xfactor) + xoffset;
						
						var yfactor = -65.97284;
						var yoffset = 3068.5254;
						var y = (lat * yfactor) + yoffset;
						return {x : x, y : y};
					},
					elems : {
					    "department-42" : "m 8.83,16.04 c -0.62,0.06 -0.75,0.88 -1.43,0.79 -0.86,0.19 -2.31,0.04 -2.37,1.27 -0.28,0.48 -1.49,-0.27 -1.41,0.66 -0.03,0.58 0.74,0.57 0.73,1.19 0.2,0.87 -0.09,1.81 0.5,2.59 0.56,0.65 0.33,1 -0.19,1.46 -0.11,0.72 0.35,1.43 0.17,2.18 0.2,1.06 1.37,1.96 0.81,3.13 -0.83,1.62 0.1,3.44 0.57,5.03 -0.3,0.84 -1.38,1.22 -2.16,1.52 -0.5,0 -1.39,-0.58 -1.37,0.3 -0.55,0.7 -1.67,-0.58 -2.15,0.16 0.25,0.85 -1.05,1.67 -0.27,2.43 1.2,0.46 2.19,1.65 2.41,2.9 -0.48,0.81 -1.37,1.42 -1.32,2.47 0.18,1.16 0.13,2.61 -0.81,3.43 -0.66,0.19 -0.41,0.95 0.16,1.03 0.64,0.16 1.57,0.86 1.01,1.56 -0.05,0.64 0.66,0.98 1.19,0.89 0.28,0.87 1.39,1.39 1.07,2.43 -0.45,1.26 0.78,2.21 1.13,3.32 0.7,0.53 0.5,1.68 1.42,1.94 0.59,0.09 1.11,0.33 1.35,0.89 0.96,0.82 2.2,1.27 3,2.31 0.48,0.46 0.69,1.08 1.04,1.62 -0.41,1.44 0.15,3.16 1.36,4.04 0.56,0.88 -1.18,1.35 -0.55,2.22 0.17,0.5 0.1,1.03 -0.34,1.32 -0.03,0.88 -1.23,0.65 -1.72,1.18 -1.36,0.71 -1.89,2.34 -1.42,3.77 0.23,0.51 0.09,1.67 0.8,1.75 0.38,-0.3 -0.09,-0.95 0.49,-1.14 0.49,-0.42 0.71,-1.26 1.53,-1.07 0.58,-0.12 1.3,-0.24 1.47,0.51 0.43,0.52 0.83,1.06 1.13,1.66 0.48,0.18 0.28,-0.66 0.78,-0.7 0.65,-0.51 1.27,0.1 1.52,0.67 0.84,0.31 0.38,-1.25 1.21,-1.19 0.83,-0.25 1.57,-0.83 2.49,-0.52 0.8,-0.2 -0.57,-1.28 0.44,-1.36 0.64,-0.28 1.35,-0.42 1.91,0.1 0.75,0.11 1.62,-0.53 2.28,0.16 0.26,0.39 0.73,0.6 1.11,0.71 -0.15,0.61 0.51,1.1 1.02,0.67 0.57,-0.61 1.45,-0.59 2.09,-0.08 0.47,0.41 1.34,0.97 1.28,1.69 -0.32,0.53 -1,0.74 -1.29,1.2 -0,0.76 0.79,1.09 1.35,1.24 0.05,0.75 -1.01,1.51 -0.23,2.2 0.57,0.93 1.62,0.12 2.23,-0.29 0.49,-0.32 1.19,-0.23 1.38,0.37 0.78,0.81 1.55,2.2 2.83,2.11 0.38,-0.09 0.52,-0.73 0.96,-0.32 0.86,0.07 1.57,-0.77 2.48,-0.48 0.71,0.11 1.67,-0.93 0.78,-1.37 -0.47,-0.25 -0.02,-1.09 0.18,-1.44 0.29,-0.23 0.93,-0.16 0.76,-0.75 -0.34,-0.86 1.04,-0.8 1.05,-1.58 0.72,-0.89 1.79,-1.41 2.87,-1.63 0.75,-0.53 1.59,-0.91 2.37,-1.36 0.59,-1.06 -0.44,-2.05 -0.54,-3.05 0.05,-0.64 0.93,-0.95 0.64,-1.69 -0.02,-1.04 -0.84,-1.78 -0.91,-2.81 -0.45,-0.84 -1.16,0.14 -1.68,0.33 -1.12,0.56 -2.34,-0.53 -2.19,-1.68 -0.02,-0.72 -0.09,-1.5 0.26,-2.14 -0.15,-0.41 -0.85,-0.11 -0.92,-0.69 -0.31,-0.62 -0.62,-2.02 -1.61,-1.48 -0.79,0.41 -1.15,-1.04 -2.02,-0.66 -0.77,0.03 -1.88,0.91 -2.45,0.04 -0.26,-0.61 -1.23,-0.16 -1.6,-0.44 0.34,-0.83 -0.77,-0.95 -0.98,-1.59 -0.3,-1.15 -1.78,-1.13 -2.2,-2.2 -0.31,-0.54 -0.25,-1.28 -1.01,-1.48 -0.9,-0.25 -0.38,-1.4 -0.43,-2.06 0.14,-1.2 1.17,-2.23 1.27,-3.43 -0.42,-0.68 -1.47,0.52 -1.77,-0.38 -0.48,-0.71 -0.38,-1.64 0.51,-1.87 0.43,-0.59 0.18,-1.42 0.5,-2.07 0.04,-1.02 0.13,-2.03 0.62,-2.93 -0.18,-0.65 -1.18,-0.14 -1.59,-0.63 -0.64,-0.28 -0.91,-0.88 -1.1,-1.49 -0.42,-0.3 -0.79,-0.95 -0.11,-1.22 0.78,-0.75 0.1,-2.01 -0.86,-2.15 -0.48,-0.29 -0.89,-0.73 -0.79,-1.32 -0.23,-1.07 -1.53,-1.02 -2.14,-1.67 -0.31,-0.62 0.36,-0.75 0.84,-0.64 0.61,-0.19 1.51,0.61 1.81,-0.25 0.34,-0.61 -0.12,-1.46 -0.84,-1.18 -0.75,-0.52 -1.52,-1.34 -1.7,-2.26 0.78,-0.09 2.04,-0.15 2.15,-1.21 -0.03,-0.63 0.74,-0.98 0.49,-1.68 -0.16,-0.56 -0.1,-1.1 0.34,-1.48 0.03,-0.89 0.91,-1.33 1.7,-1.41 0.63,0.04 0.9,-1.08 1.5,-0.58 0.71,0.69 1.52,0.93 1.78,-0.28 0.39,-0.43 0.66,-1.2 -0.06,-1.48 -0.53,-0.32 -1.36,-0.52 -1.29,-1.31 0.25,-0.43 1.51,-0.4 0.96,-1.09 -0.35,-0.66 -1.15,-0.64 -1.44,-0.01 -0.87,0.06 -0.81,1.08 -0.53,1.63 -0.54,0.55 -1.32,-0.16 -1.89,0.38 -0.43,0.28 -0.72,0.89 -1.33,0.6 -0.73,0.07 -0.71,1.28 -1.6,1.02 -0.59,0.2 -1.24,-0.54 -0.6,-0.95 0.49,-0.48 -0.03,-1.43 -0.65,-0.89 -0.27,0.48 -0.82,0.45 -1.09,-0.03 -0.4,-0.85 -1.62,-0.23 -1.4,0.54 -0.94,0.39 -2.29,0.21 -2.96,-0.62 -0.49,-1.03 -1.32,-0.58 -2.09,-0.2 -1.15,0.09 -1.76,1.45 -2.99,1.23 -1.05,0.32 -1.49,-0.4 -1.74,-1.29 -0.06,-1.13 -1.54,-1.08 -2.37,-0.93 -0.72,-0.16 -1.83,-0.62 -1.26,-1.49 0.28,-0.95 1.08,-2.18 0.21,-3.06 -0.15,-0.09 -0.34,-0.1 -0.51,-0.09 z",
					    "department-69" : "m 45.2,14.06 c -0.39,0.16 -0.71,0.72 -1.15,0.28 -0.51,-0.34 -0.84,0.1 -0.94,0.54 -0.49,0.44 -0.71,1.09 -0.77,1.72 -0.82,-0.01 -2.3,-0.15 -2.19,-1.29 0.05,-0.69 -0.83,-0.55 -0.9,0.04 -0.11,1.05 -1.39,1.13 -2.21,1.09 -0.41,-0.38 -0.51,-1.24 -1.27,-1.15 -0.51,-0.24 -0.93,-0.83 -1.57,-0.57 -0.75,-0.54 -1.98,0.1 -1.96,1.09 -0.17,1.14 -0.57,2.42 -0.18,3.53 0.49,0.3 1.33,0.66 1.32,1.28 -0.27,0.47 -0.92,0.35 -1.18,0.71 0.22,0.87 1.43,1.1 1.94,1.74 -0.4,0.66 -0.69,1.66 -1.26,2.1 -0.73,-0.21 -1.46,-1.36 -2.07,-0.34 -0.64,0.45 -1.96,0.2 -2.07,1.24 -0.2,0.63 -0.84,1.16 -0.51,1.85 0.05,0.7 -0.4,1.24 -0.5,1.91 -0.36,0.77 -1.25,0.87 -1.96,0.98 -0.31,0.65 0.82,1.23 1.05,1.79 0.39,0.45 1.23,-0.24 1.29,0.58 0.33,0.5 0.09,1.4 -0.44,1.61 -0.74,0.12 -1.38,-0.45 -2.06,-0.31 -0.59,0.53 0.41,1.05 0.91,1.01 0.85,0.32 1.17,1.2 1.34,1.99 0.78,0.63 2.54,1.29 1.67,2.56 -0.51,0.23 -0.75,0.82 -0.24,1.19 0.33,0.87 0.87,1.81 1.96,1.76 0.48,-0.12 1.24,0.17 0.78,0.75 -0.45,0.64 -0.2,1.43 -0.53,2.13 -0.17,0.52 0.57,1.17 -0.08,1.46 -0.26,0.49 0.06,1.26 -0.67,1.41 -1.04,0.39 -0.35,2.36 0.67,1.71 0.45,-0.35 1.07,0.43 0.96,0.68 -0.62,0.63 -0.74,1.53 -1.16,2.28 -0.13,0.85 -0.62,2 0.04,2.71 1.19,0.38 0.9,2.03 2.06,2.52 1.14,0.24 1.15,1.65 2.17,2.06 0.44,0.14 0.06,0.82 0.68,0.75 0.9,-0.12 1.38,1.27 2.29,0.63 0.48,-0.24 1,-0.14 1.48,-0.36 0.57,0.42 1.2,1.15 2.01,0.6 1.06,-0.07 0.74,1.58 1.5,1.92 0.62,-0.2 -0.37,0.08 0.47,0.08 0.89,0.59 -0.15,0.78 0.01,2.21 -0.19,0.88 0.27,1.85 1.23,1.94 0.84,0.25 1.37,-0.52 1.98,-0.85 1.21,0.41 0.59,2.49 2.05,2.53 0.73,0.04 0.18,-0.82 0.68,-1.03 1.38,-1.17 3.12,-2.09 3.9,-3.8 -0.22,-0.81 -1.51,-0.7 -1.91,-1.47 -0.48,-1.03 -1.5,-1.61 -2.31,-2.31 1.08,-0.58 2.5,-0.17 3.51,0.44 0.41,-0.13 0.22,-0.91 0.79,-1.07 1.49,-0.73 3.26,-0.99 4.9,-1.02 0.55,0.27 0.67,-0.26 0.65,-0.62 0.69,-0.49 1.65,0.71 2.18,0.02 -0.26,-0.63 -0.26,-1.51 0.38,-1.94 0.24,-0.57 0.52,-1.12 1.1,-1.45 0.67,-0.46 1.38,-1 1.61,-1.8 0.56,-0.61 1.4,-0.18 2.03,-0.39 0.42,-0.75 -0.61,-1.46 -1.14,-1.85 -0.57,-0.34 -1.64,-0.19 -1.68,-1.09 0.11,-0.58 -0.17,-1.17 -0.81,-1.1 -0.4,-0.36 -0.83,-1.16 -0.58,-1.66 0.51,-0.03 1.31,0.51 1.52,-0.28 0.62,-1.06 -0.42,-1.15 -1.29,-0.96 -1.23,0.08 -2.39,0.46 -3.62,0.21 -0.99,-0.01 -1.98,-0.03 -2.96,0.1 -0.02,-1.23 -0.17,-2.48 -0.87,-3.51 -0.02,-0.49 0.17,-1.17 -0.53,-1.28 -0.46,-0.23 -0.4,-0.95 -0.84,-1.12 -0.24,-0.86 -1.51,-1.24 -2.17,-0.56 -0.29,0.16 -1.1,0.76 -0.84,-0.03 0.23,-0.58 0.09,-1.29 -0.63,-1.24 -0.42,-0.4 -0.69,-1.16 -1.44,-0.9 -0.71,0.24 -1.8,-0.39 -1.22,-1.18 0.48,-0.6 1.18,-1.09 0.76,-1.97 -0.24,-1.4 -0.21,-2.86 -0.5,-4.22 0.28,-0.66 1.42,-1.16 0.72,-1.95 -0.77,-0.77 -0.12,-1.33 0.41,-1.99 0.32,-1.09 1.47,-1.84 1.54,-3.03 -0.16,-0.87 -1.08,-1.66 -1.98,-1.39 -1.09,0.04 -1.96,-1.09 -1.41,-2.07 0.58,-0.59 -0.5,-1.4 0.2,-1.94 -0.15,-1.22 -2.34,-0.58 -2.28,-2 0.19,-0.6 1.52,-0.25 1.16,-1.06 -0.33,-0.46 -0.46,-1.39 -1.03,-1.55 z",
					    "department-07" : "m 48.1,76.26 c -0.99,0.24 -1.67,1.3 -2.78,1.27 -0.89,0.27 -1.77,0.94 -2,1.83 -0.5,0.25 -1.18,0.49 -0.96,1.22 0.3,0.8 -0.79,0.37 -0.98,0.97 -0.57,0.78 0.84,1.4 0.19,2.14 -0.72,0.85 -1.99,0.01 -2.79,0.76 -0.48,0.35 -1.12,0.01 -1.53,0.45 -0.48,-0.04 -1.01,0.15 -0.85,0.72 -0.69,1.04 -0.15,2.54 -1.26,3.38 -0.86,0.8 -0.93,2.11 -0.33,3.08 0.29,0.65 -0.76,0.37 -0.65,0.99 -0.57,-0.03 -0.74,-0.7 -0.63,-1.16 -0.32,-0.79 -1.61,-1.14 -2.28,-0.63 -0.44,0.81 0.89,0.85 1.07,1.53 0.11,0.79 -1.06,0.79 -1.58,0.94 -0.34,0.48 -0.25,1.2 -0.6,1.71 -0.26,0.63 0.24,1.15 0.84,1.13 0.63,0.29 0.63,1.51 -0.21,1.48 -0.48,0.2 -0.77,0.6 -1.36,0.46 -0.94,-0.15 -1.92,0.46 -1.88,1.48 -0.32,0.87 1.13,1.38 0.7,2.15 -0.81,0.41 -1.81,0.8 -2.72,0.78 -0.59,-0.54 -1.37,0 -1.32,0.73 -0.03,1.53 -1.9,2.27 -1.87,3.82 -0.08,0.64 -0.87,0.82 -1.28,1.26 -0.82,0.23 -1.7,-0.6 -2.5,0.02 -0.94,0.52 -2.07,-0.07 -3,0.19 -0.51,0.74 -0.47,1.59 -0.23,2.39 -0.25,0.43 -1.08,0.09 -1.37,0.61 -0.36,0 -0.64,0.22 -0.58,0.66 -0.39,0.48 -0.84,-0.5 -1.2,-0.64 -0.7,-0.22 -0.75,0.96 -0.93,1.41 -0.14,0.73 -0.96,1.32 -0.63,2.15 -0.47,0.36 -1.13,0.61 -1.48,1.15 -0.41,-0.02 -1.2,-0.14 -1.08,0.54 0.41,0.5 0.18,1.04 -0.15,1.53 -0.28,0.53 0.31,0.92 0.32,1.44 0.17,0.29 0.71,0.1 0.38,0.61 -0.61,0.96 0.17,1.84 0.5,2.71 0.3,0.81 -0.17,1.97 0.59,2.54 0.1,0.57 0.04,1.28 0.59,1.64 0,0.7 0.68,0.83 1.23,0.91 0.9,0.84 0.8,2.26 1.46,3.25 0.68,1.46 0,3.44 1.49,4.51 0.42,0.58 1.44,0.33 1.53,1.2 0.1,0.51 -0.27,1.28 0.47,1.44 0.48,0.29 0.96,0.94 0.3,1.35 -0.27,0.19 -0.88,0.19 -0.57,0.7 0.61,1.13 0.46,2.69 -0.23,3.72 -0.08,0.66 0.81,0.7 1.09,0.2 0.7,-0.6 1.68,-0.37 2.46,-0.68 0.46,-0.31 0.86,0.58 1.02,0.92 0.11,0.96 1.19,0.13 1.66,0.42 0.23,1.21 1.59,1.43 2.27,2.31 0.45,0.62 1.55,1.34 2.08,0.41 0.67,-0.75 0.36,-1.95 0.81,-2.72 0.8,-0.05 1.47,-0.75 1.66,-1.45 0.97,-0.2 2,-0.38 2.97,-0.52 1.17,0.93 -0.53,2.45 0.29,3.48 0.61,0.25 1.63,0.58 2.13,-0.02 0.44,-1 -0.35,-2.55 0.74,-3.23 0.63,0.13 1.29,0.11 1.92,0.16 0.63,0.41 1.28,0.94 2.01,1.06 -0.02,1.14 1.09,1.61 2.01,1.84 0.57,0.12 0.88,0.65 1.32,0.9 0.35,-0.15 0.72,-0.3 0.98,0.11 0.73,-0.01 0.26,-1.2 0.37,-1.66 -0.01,-1.95 -0.45,-4 0.4,-5.84 0.46,-0.99 -0.13,-2.56 1.13,-3.04 1,-0.89 0.75,-2.53 0.19,-3.6 -0.36,-1.02 1,-1.85 0.59,-2.8 -0.75,-0.68 -0.19,-1.69 0.2,-2.39 0.1,-1.02 1.89,-0.57 1.7,-1.76 0.26,-1.84 2.02,-3.18 1.7,-5.14 -0.14,-1.66 -1.13,-3.31 -0.76,-4.98 0.27,-0.69 -0.45,-1.73 0.57,-2.02 1.07,-0.39 0.83,-1.85 1.81,-2.28 0.51,-0.49 0.11,-1.51 0.97,-1.68 0.59,-0.45 0.37,-1.35 0.97,-1.83 0.42,-0.75 -0.6,-1.7 0.17,-2.31 0.61,-0.94 1.47,-2.29 0.52,-3.31 -0.62,-0.67 -0.91,-1.51 -1.02,-2.39 -0.15,-0.53 -0.93,-1.1 -0.39,-1.61 0.07,-0.76 -0.21,-1.63 0.55,-2.17 0.64,-0.68 -0.38,-1.19 -0.94,-1.35 -0.48,-0.71 0.09,-1.83 -0.59,-2.52 -0.45,-0.53 -1.12,-1.34 -0.47,-2.01 0.46,-0.49 1.08,-1.35 0.18,-1.78 -0.52,-1.48 -0.29,-3.16 -0.4,-4.72 -0.06,-1.21 0.23,-2.43 0.17,-3.62 -0.79,-1.01 -2.62,-1.84 -2.05,-3.39 0.49,-0.73 0.09,-1.51 -0.83,-1.44 z",
					    "department-26" : "m 59.55,77.71 c -0.85,0.22 -1.48,0.89 -2.35,1.06 -1.16,0.51 -2.05,1.65 -3.3,1.92 -0.61,0.07 -0.85,-0.75 -1.5,-0.49 -0.51,0.08 -1.82,0.15 -1.32,0.96 0.14,1.77 -0.29,3.57 -0.07,5.35 0.16,1.1 -0.17,2.58 0.85,3.32 0.2,0.96 -1.58,1.63 -0.81,2.58 0.52,0.79 1.35,1.56 0.96,2.61 -0.18,1 1.75,0.88 1.26,1.96 -0.85,1.21 -0.84,2.9 -0.23,4.22 0.04,1.34 1.53,2.12 1.52,3.42 -0.48,0.77 -0.58,1.72 -1.24,2.36 -0.24,0.72 0.48,1.54 -0.2,2.18 -0.31,0.72 -0.33,1.69 -1.22,1.96 -0.43,0.46 0.01,1.4 -0.79,1.57 -0.78,0.55 -0.54,1.93 -1.65,2.17 -0.8,0.44 -0.25,1.67 -0.43,2.39 -0.19,2.09 1.25,3.97 0.6,6.05 -0.3,1.08 -1.21,1.88 -1.41,3.02 -0.21,0.61 -0.1,1.55 -0.99,1.57 -0.99,0.22 -1.04,1.4 -1.45,2.14 -0.03,0.69 1.02,1.18 0.37,1.88 -0.64,0.81 -0.77,1.95 -0.12,2.78 0.07,0.9 0.12,2.09 -0.56,2.76 -1.54,0.61 -0.63,2.73 -1.47,3.87 -0.23,1.05 -0.48,2.31 -0.01,3.31 0.83,0.62 2.19,0.81 3.06,0.23 1.66,-0.29 3.91,0.79 3.79,2.7 0.03,1.23 0.57,2.31 0.53,3.56 0.53,0.46 1.13,-0.5 1.57,-0.79 0.71,-0.68 1.31,-1.61 2.43,-1.22 0.91,0.2 1.62,-0.25 2.3,-0.76 0.55,-0.16 1.11,-0.74 1.56,-0.85 1.05,0.14 1.76,-0.9 2.74,-1.12 0.94,-0.61 0.9,0.94 1.57,1.23 1.15,0.57 2.49,-0.44 3.11,-1.38 0.09,-0.52 1.04,-0.85 1,-0.09 0.27,0.96 -0.85,1.36 -0.89,2.19 0.33,0.56 0.73,1.18 0.43,1.89 -0.2,0.35 -0.61,0.83 -0.05,1.1 0.95,0.62 2.31,1.19 3.42,0.75 0.25,-0.3 0.1,-1.12 0.74,-0.85 1.03,0.16 1.61,1.21 2.6,1.37 0.7,0.01 1.4,0.49 2.02,-0.11 0.65,-0.11 1.5,0.48 1.45,1.2 0.23,0.81 -0.24,1.95 0.42,2.56 0.83,-0.04 1.95,-0.05 2.21,0.93 0.51,0.41 0.33,1.47 1.2,1.47 0.66,0.07 1.56,0.27 1.97,-0.37 0.75,-0.33 1.53,-0.75 1.77,-1.59 0.38,-0.22 1.43,0.04 1.16,-0.74 -0.35,-0.45 -0.69,-0.97 -0.2,-1.49 0.34,-0.62 1.35,-0.77 1.89,-0.43 0.25,0.49 0.76,1.11 1.35,1.06 0.3,-0.53 0.37,-1.4 1.23,-1.27 0.89,-0.21 0.25,-1.4 0.42,-2.01 -0.1,-0.86 -0.52,-1.72 -0.01,-2.55 0.25,-0.41 0.08,-1.01 -0.47,-0.73 -0.47,0.19 -1.08,0.51 -1.28,-0.21 -0.4,-0.41 -0.41,-0.93 -0.2,-1.4 -0.1,-0.59 -1.04,-0.48 -1.26,-0.85 0.12,-0.5 1.19,-1.01 0.67,-1.46 -1.23,-0.19 -2.61,0.21 -3.76,-0.18 -0.29,-1.11 -1.53,-0.77 -2.2,-0.33 -0.47,-0.56 -1.21,-0.86 -1.37,-1.61 -0.44,-0.29 -1.37,-0.09 -1.39,-0.84 0.9,-0.95 -0.02,-2.33 -0.63,-3.17 0.32,-0.48 0.88,-0.93 1.44,-0.48 0.6,0.51 1.81,0.71 1.94,-0.32 -0.33,-0.65 -1.62,-0.64 -1.4,-1.63 0.12,-0.84 -0.21,-1.73 -0.11,-2.52 0.54,-0.5 0.98,0.51 1.58,0.42 1.19,-0.06 2.2,0.55 3.23,1 0.79,-0.11 1.88,1.18 2.42,0.1 0.31,-0.55 0.09,-1.98 1.09,-1.74 0.44,0.21 1.12,-0.16 0.66,-0.62 -0.48,-0.67 -1.16,-1.36 -1.94,-1.54 -0.69,-0.33 -0.85,-1.14 -0.38,-1.73 0.52,-1.24 1.18,-2.46 1.84,-3.59 0.15,-0.82 -0.6,-1.86 -0.03,-2.54 1.38,-0.27 2.72,0.92 4.09,0.56 0.6,-0.22 0.88,-1.47 1.61,-0.82 0.74,0.42 1.29,-0.33 1.45,-0.97 0.25,-0.64 1.63,-0.81 1.16,-1.63 -0.7,-1.12 -1.9,-0.07 -2.82,-0.02 -0.8,-0.06 -1.12,-1.11 -1.96,-1.15 -0.92,-1.19 -2.85,0.15 -3.7,-1.1 -0.4,-0.64 -0.6,-1.64 -1.53,-1.63 -0.8,-0.22 -1.02,-0.97 -1.4,-1.58 -0.23,-0.37 -1.22,-0.77 -1.04,0.01 0.28,0.48 -0.12,0.66 -0.51,0.45 -1.28,-0.33 -2.69,-0.69 -3.7,-1.54 -0.12,-0.68 1.22,-1.02 0.6,-1.73 -0.4,-0.09 -0.55,-0.38 -0.38,-0.82 0.17,-1.53 0.23,-3.05 0.61,-4.53 0.16,-1.99 -0.38,-4.06 0.41,-5.95 0.07,-0.71 -0.45,-1.28 -0.42,-2 -0.33,-0.82 -0.88,-1.66 -0.39,-2.56 -0.01,-0.56 0.73,-0.67 0.73,-1.14 -0.49,-0.77 -1.43,-0.15 -1.66,0.51 -0.43,0.86 -1.17,1.4 -2.01,1.79 -0.32,0.44 -0.97,0.81 -1.41,0.29 -0.62,-0.38 -1.49,-0.41 -1.66,-1.29 -0.43,-0.2 -1.04,1.03 -1.5,0.25 -0.3,-0.69 -1.12,-0.13 -1.59,-0.01 -1.47,-0.11 -2.1,-2.14 -3.7,-1.75 -0.72,0.01 -0.84,1.47 -1.66,0.96 -0.16,-0.35 -0.48,-0.45 -0.77,-0.4 -0.62,-0.43 0.8,-0.46 0.87,-0.95 0.54,-1.24 1.72,-2.26 1.4,-3.76 0.2,-1.57 -1.1,-2.85 -0.83,-4.42 0.39,-0.42 1.39,-0.57 0.76,-1.31 -0.13,-0.65 -0.63,-0.97 -1.17,-1.15 -0.52,-0.39 -0.85,0.61 -1.46,0.32 -0.65,-0.04 -0.04,-1.01 -0.14,-1.39 -0.06,-0.6 0.59,-1.65 -0.02,-2.06 -0.61,0.53 -1.52,0.83 -2.35,0.88 -0.47,-0.81 -0.41,-2.37 -1.71,-2.32 -1.31,0.27 -0.69,-1.65 -1.87,-1.6 z m -1.27,60.37 c 0.8,0.07 1.41,0.99 2.23,0.86 0.29,0.5 -0.2,1.54 0.66,1.61 0.54,0.47 1.29,0.46 1.9,0.67 0.01,0.7 -0.83,1.32 -1.52,1.3 -0.79,0.32 -0.71,1.36 -1.23,1.94 0.08,0.42 -0.03,0.77 -0.45,0.97 -0.55,0.4 -0.33,1.45 -0.86,1.71 -1.3,-0.59 -2.81,-1.17 -4.2,-0.73 -0.14,-0.69 -0.71,-1.44 -0.12,-2.08 0.21,-0.59 -0.6,-0.54 -0.84,-0.66 0.52,-1.11 1.85,-1.88 1.74,-3.25 0.29,-1.35 2.13,-1.32 2.7,-2.33 z",
					    "department-38" : "m 75.7,42.07 c -0.65,0.66 -1.3,1.42 -1.89,2.17 -0.55,1.15 -0.55,2.55 -1.53,3.49 -0.66,0.72 -1.52,1.48 -2.47,1.71 -0.62,-0.07 -1.51,-0.03 -1.55,-0.83 -0.58,-1.05 -1.8,-1.76 -2.96,-1.74 -0.32,0.16 -0.19,0.81 -0.69,0.54 -0.7,-0.04 -0.41,1.31 -1.22,0.89 -0.55,-0.27 -1.17,0.23 -0.62,0.72 0.32,0.58 1.31,0.22 1.2,1.01 -0.03,0.66 0.16,1.55 1.02,1.43 0.96,0.17 1.87,1.06 2.07,2.02 -0.4,0.85 -1.59,-0.05 -2.16,0.62 -0.31,0.66 -0.73,1.45 -1.5,1.63 -0.58,0.3 -0.91,0.84 -1.09,1.4 -0.55,0.51 -1.17,1.28 -0.57,2 -0.01,0.48 -0.64,0.73 -1,0.39 -1,-0.78 -0.83,0.24 -1.02,0.83 -0.7,-0.09 -1.39,-0.59 -2.16,-0.31 -1.39,0.29 -3.26,0.23 -4.11,1.54 0.03,0.6 -0.51,0.6 -0.87,0.27 -0.74,-0.52 -1.76,-0.54 -2.58,-0.29 0.27,0.53 1.19,0.75 1.47,1.43 0.41,1.18 1.82,1.36 2.51,2.19 -0.78,1.8 -2.65,2.83 -4.1,4.08 -0.28,0.31 0.19,1.01 -0.47,0.99 -0.92,-0.18 -0.67,0.84 -0.66,1.39 -0.28,0.51 -0.95,0.96 -0.56,1.64 0.47,0.76 0.65,1.63 0.49,2.51 0.08,0.57 0.95,1.11 0.59,1.72 -0.75,0.75 0.04,1.93 0.73,2.43 0.72,0.99 1.99,-0.05 2.98,-0.04 0.58,-0.28 0.2,0.76 0.82,0.67 1.19,-0.11 1.72,-1.24 2.77,-1.64 0.96,-0.42 1.88,-0.95 2.85,-1.35 0.93,-0.25 0.99,0.89 1.46,1.35 0.65,0.4 1.81,0.16 1.86,1.22 0.11,0.64 0.49,1.59 1.31,1.16 0.54,-0.04 1.01,-0.39 1.32,-0.72 0.39,-0.09 1,-0.05 0.64,0.53 -0.17,0.9 -0.69,1.93 -0.32,2.82 0.57,0.38 0.98,-1.02 1.4,-0.32 0.49,0.16 1,0.32 1.11,0.93 0.08,0.49 0.83,0.92 0.75,1.37 -0.56,0.07 -1.54,0.11 -1.36,0.95 0.04,1.32 1.22,2.34 0.88,3.72 0.1,1.24 -0.32,2.38 -1.08,3.33 -0.21,0.47 -0.38,0.87 -0.75,1.2 -0.07,0.59 0.79,1.05 1,0.31 0.18,-0.75 0.86,-0.88 1.5,-0.7 1.35,-0.04 1.83,1.96 3.31,1.6 0.55,-0.16 1.18,-0.29 1.56,0.26 0.52,0.28 1.24,-0.88 1.53,-0.09 0.27,0.59 1.22,1.15 1.8,0.8 -0.01,-0.35 0.16,-0.84 0.44,-0.31 0.6,0.53 1.47,-0.29 1.93,-0.7 0.57,-0.48 0.74,-1.52 1.45,-1.77 0.51,0.03 1.28,0.51 1.15,1.03 -0.9,0 -1.07,1.22 -1.05,1.92 0.67,0.91 0.62,2.11 1.09,3.11 -0.49,1.05 -0.56,2.23 -0.47,3.39 0.14,1.63 -0.09,3.22 -0.4,4.81 0.09,0.99 -0.47,2.06 -0.14,3 0.48,0.01 0.7,0.44 0.45,0.85 -0.1,0.46 -1.17,0.9 -0.47,1.29 1.01,0.65 2.21,1.14 3.44,1.31 0.64,-0.15 -0.51,-1.24 0.3,-1.18 0.87,0.29 1.45,1.03 1.76,1.84 0.71,0.53 1.89,0.54 2.06,1.62 0.16,0.38 0.51,0.48 0.58,0.89 0.81,0.34 1.89,0.15 2.62,-0.12 0.61,0.78 1.58,1.05 2.25,1.76 1.3,0.44 2.66,-0.66 2.95,-1.93 0.44,-0.54 0.2,-1.4 0.53,-1.92 0.78,0.27 1.65,0.92 2.56,0.46 0.39,-0.28 0.82,-0.55 1.26,-0.19 0.61,0.13 0.89,-0.69 1.49,-0.59 0.25,-0.6 0.86,-0.75 1.31,-1.16 0.36,-0.79 -1.07,-0.87 -1.14,-1.46 0.59,-0.73 1.51,-0.94 2.33,-1.2 0.42,-0.36 0.79,-1.46 1.47,-0.83 0.45,0.46 1.04,1.48 1.71,0.68 1.03,-0.71 1.94,-1.63 2.79,-2.5 0.92,-0.17 1.6,0.93 2.5,0.36 0.92,-0.31 1.82,0.4 2.71,0.32 0.53,-0.88 1.59,-1.75 2.67,-1.36 0.45,0.62 1.18,1.97 2.09,1.23 0.27,-0.74 -0.15,-1.59 0.18,-2.35 -0,-1.12 0.28,-2.35 -0.12,-3.41 -0.64,-0.22 -1.58,-0.6 -1.23,-1.48 0,-0.71 -0.75,-1.36 -0.22,-2.05 0.28,-0.82 -0.93,-0.37 -1.33,-0.33 -1.33,0.44 -2.88,0.15 -3.94,-0.75 0,-1.24 0.13,-2.67 0.9,-3.68 0.55,-0.08 0.79,-0.6 0.53,-1.11 -0.16,-0.82 -0.52,-1.94 0.5,-2.36 0.66,-0.3 1.13,-1.68 0.18,-1.85 -0.57,-0.05 -1.32,0.64 -1.66,-0.15 -0.49,-0.8 -1.64,-1.03 -2.19,-0.19 -0.51,0.29 -1.36,-0.25 -0.89,-0.85 0.57,-0.89 0.92,-2.25 -0.09,-2.98 -0.29,-0.5 -0.47,-1.05 -0.78,-1.55 -0.4,-0.89 0.78,-1.64 0.24,-2.47 -0.08,-0.79 0.03,-1.86 0.83,-2.2 0.14,-0.65 0.77,-0.75 1.24,-1.03 0.37,-0.57 0.85,-1.53 0.39,-2.14 -0.33,-0.01 -0.98,-0.41 -0.42,-0.66 0.89,-0.64 -0.08,-1.79 -0.5,-2.43 -0.77,-0.68 -1.29,-1.57 -1.86,-2.39 -0.46,-0.27 -1.52,0.61 -1.57,-0.27 -0.7,-0.81 -1.74,0.49 -2.52,-0.23 -0.68,-0.25 -1.32,-0.7 -1.28,-1.49 -0.31,-0.7 -1.2,-0.87 -1.53,-1.59 -0.78,0.09 -1.77,0.36 -2.4,0.91 0.03,0.62 0.26,1.3 -0.05,1.94 -0.23,0.65 -1.17,1.5 -0.37,2.11 0.45,-0.04 0.51,0.29 0.28,0.64 -0.16,0.46 -0.82,1.35 -1.33,0.86 -0.47,-1.22 -2.01,-1.47 -3.06,-2.03 -0.91,-0.24 -1.39,-1.64 -2.49,-1.07 -0.57,0.21 -1.61,0.3 -1.56,-0.59 0.03,-0.97 -0.2,-1.89 -0.76,-2.69 -0.38,-1.2 -1.15,-2.19 -1.97,-3.13 -0.21,-0.88 -0.21,-1.91 -1.06,-2.5 -0.62,-0.9 -1.33,-1.81 -1.53,-2.92 -0.5,-0.71 -0.63,-1.56 -1.02,-2.3 -0.49,-0.6 -1.12,-1.45 -1.95,-1.33 -0.59,-0.79 0.23,-2.2 -0.69,-2.75 -0.98,-0.33 -1.11,-1.6 -1.99,-2.12 -1.1,-1.03 -1.8,-2.42 -2.88,-3.5 -0.57,-0.52 -0.83,-1.59 -0.12,-2.07 -0.04,-0.49 -0.64,-0.72 -0.73,-1.22 -0.87,-0.84 -1.83,-1.79 -2.99,-2.17 l -0.03,0.01 z",
					    "department-73" : "m 97.66,38.53 c -0.45,0.45 0.31,1.19 0.03,1.78 -0.43,2.3 -1.49,4.41 -1.88,6.69 -0.26,1.38 -0.01,2.88 -0.3,4.22 -0.62,0.31 0.02,1.17 -0.58,1.57 -0.45,1.17 -1.58,0.73 -2.56,0.64 -0.84,0.07 0.16,1.14 -0.18,1.71 -0.39,0.69 -1.23,1.27 -0.9,2.19 0.16,0.81 -0.73,0.85 -1.28,0.92 -0.46,0.22 -0.52,0.84 -0.99,1.02 -0.1,0.57 -0.89,1.04 -0.26,1.63 0.76,1.32 2.36,2.45 2.11,4.11 0.23,0.33 0.74,0.34 0.74,0.83 0.84,0.69 0.84,2 1.51,2.8 0.86,0.69 -0.26,2.79 1.33,2.79 0.69,-0.42 1.76,-0.43 2.21,0.36 0.87,0.8 2.15,0.9 3.13,1.6 0.57,0.15 0.69,0.71 1.06,1.03 0.59,0.02 1.32,-1.15 0.42,-1.31 -0.57,-0.83 0.26,-1.71 0.62,-2.42 0.32,-0.63 -0.18,-1.37 -0.02,-1.93 0.76,-0.47 1.65,-0.69 2.47,-1.04 0.43,0.56 1.01,1.07 1.58,1.39 0.13,0.76 0.39,1.57 1.26,1.79 0.96,0.51 2.24,-0.49 3,0.51 0.5,0.17 1.21,-0.47 1.46,0.31 0.64,1.59 2.48,2.51 2.66,4.3 -0.29,0.15 -0.79,0.54 -0.21,0.73 0.85,0.23 0.12,1.35 0.11,1.91 -0.05,0.98 -1.42,0.76 -1.63,1.63 -0.67,0.52 -0.97,1.32 -0.71,2.16 0.28,0.8 -0.52,1.41 -0.41,2.16 0.41,0.87 0.74,1.73 1.41,2.45 0.62,1.01 -0.59,1.95 -0.5,2.93 0.52,0.56 1.11,-0.22 1.49,-0.5 0.92,-0.1 1.37,0.91 2.13,1.15 0.63,-0.3 1.62,-0.2 1.66,0.68 -0.1,1.41 1.8,2.18 2.81,1.25 0.66,-0.79 1.23,0.33 1.67,0.84 0.46,0.64 0.68,1.43 0.45,2.15 0.54,0.74 1.75,0.36 2.53,0.62 0.86,0.16 1.93,1 2.66,0.13 0.38,-0.92 -0.65,-2.23 0.57,-2.71 0.35,-0.45 0.85,-0.56 1.27,-0.15 0.94,0.49 1.73,-0.4 2.13,-1.14 0.91,-0.24 1.86,0.12 2.72,0.29 0.82,-0.21 1.62,-0.67 2.1,-1.32 0.99,-0.68 2.46,0.1 3.22,-1.02 0.35,-0.43 0.97,-0.89 1.45,-0.3 0.85,0.52 2.11,0.47 2.52,1.51 0.72,0.63 1.87,0.09 2.61,-0.25 0.41,-0.56 -0.74,-1.63 0.24,-1.82 0.89,-0.31 2.18,-0.09 2.36,-1.31 0.28,-0.94 0.93,-1.71 1.94,-1.85 1,-0.19 1.97,-0.56 2.92,-0.94 0.28,0.29 0.55,1.02 1.07,0.58 0.47,-0.87 0.96,-2.03 2.06,-2.12 0.86,-0.78 0.12,-2.12 -0.06,-3.06 -0.11,-0.72 -1,-1.93 0.07,-2.33 0.68,-0.07 0.41,-0.73 0.59,-1.13 0.98,-0.99 1.63,-2.36 1.91,-3.7 -0.59,-0.97 -1.87,-1.22 -2.71,-1.87 -0.94,-0.95 -0.87,-3.04 -2.54,-3.15 -0.56,-0.01 -0.92,-0.42 -0.89,-0.96 -0.58,-0.7 -1.85,-0.56 -2.18,-1.57 -0.64,-1.44 -0.23,-3.2 -1.06,-4.6 -0.34,-1.1 0.49,-2.08 0.76,-3.02 -0.69,-0.83 -1.62,-1.51 -2.76,-1.31 -0.88,0.14 -0.91,-0.82 -1.25,-1.33 -0.99,-0.62 -2.63,-0.33 -3.11,-1.66 -0.83,-0.95 -1.39,-2.07 -1.33,-3.38 -0.05,-0.49 -0.09,-1.83 -0.91,-1.34 -0.91,0.06 -1.72,0.7 -1.99,1.6 -0.42,0.52 -0.86,1.4 -1.45,1.52 -0.4,-0.17 -1.27,-0.31 -0.7,-0.88 0.23,-0.66 -0.51,-1.2 -0.28,-1.88 -0.34,-0.89 -0.91,-2.04 -1.95,-2.2 -0.89,-0.13 -2.2,0.76 -2.83,-0.15 -0.09,-0.52 -0.37,-0.96 -0.88,-1.06 -0.73,-0.81 -1.07,-2.03 -1.15,-3.07 0.63,0.06 1.62,-0.31 1.26,-1.11 -0.35,-1.05 -1.53,-1.04 -2.36,-1.47 -0.67,-0.01 -0.86,0.94 -1.52,1.09 -0.85,0.88 -1.48,2.09 -1.51,3.3 -0.72,0.96 -0.91,2.25 -1.97,2.95 -0.76,0.61 -1.69,1.28 -1.54,2.39 -0.21,0.67 -0.99,1.04 -1.01,1.82 -0.45,0.97 -0.54,2.37 -1.86,2.41 -1.14,0.38 -2.33,0.53 -3.54,0.54 -0.06,-0.45 0.01,-1.66 -0.76,-1.32 -0.31,0.13 -0.76,0.69 -1.03,0.56 -0.25,-0.91 0.24,-2.16 -0.62,-2.79 -0.14,-0.81 -1.14,-1.57 -1.94,-1.35 -0.21,0.5 -0.78,0.26 -1.03,-0.06 -0.76,0.04 -0.24,1.32 -0.76,1.53 -0.34,-0.65 -1.25,-0.37 -1.8,-0.73 -0.47,-0.07 -0.73,0.7 -1.2,0.25 -0.48,-0.36 -1.21,-0.4 -1.7,-0.51 0.01,-0.61 -0.44,-1.04 -0.93,-1.29 0.04,-0.57 0.55,-1.77 -0.49,-1.68 -0.47,-0.1 -0.19,-0.97 -0.81,-1.05 -0.66,-0.37 -1.22,0.91 -1.76,0.14 -0.38,-0.36 -0.12,-1.3 -0.92,-1.18 -1.02,-0.5 -0.45,-1.96 -0.7,-2.86 -0.23,-1.29 -0.31,-2.65 -0.65,-3.91 -0.34,-0.35 -0.97,-0.38 -1.43,-0.38 z",
					    "department-74" : "m 134.25,3.96 c -1.98,0.51 -4.09,-0.11 -6.03,0.54 -1.69,0.88 -2.87,2.78 -4.92,2.88 -1.61,0.19 -3.71,0.06 -4.62,1.7 -1.07,1.17 -2.73,2.21 -2.73,3.97 0.1,0.69 1.48,0.71 0.93,1.55 -0.41,0.84 0.21,1.93 0.9,2.4 0.42,0.09 0.95,-0.58 1.26,0.01 0.37,0.53 0.48,1.32 -0.23,1.62 -1.53,1.19 -3.48,2.08 -4.62,3.7 0.15,0.96 -1.06,1.44 -1.7,1.89 -0.92,0.54 -2.12,0.67 -3,-0.02 -0.94,-0.11 -1.74,0.7 -2.72,0.57 -1.73,-0.1 -3.26,0.92 -4.94,1 -0.77,0.2 -1.52,0.85 -1.16,1.71 0.19,0.63 -0.32,1.15 -0.97,1 -0.99,0.19 -1.36,-0.93 -2.04,-1.36 -0.25,0.5 -0.16,1.27 -0.57,1.8 -0.32,1.76 -0.11,3.59 -0.18,5.37 -0.05,1.02 1.4,1.33 1.1,2.4 -0.08,0.89 -0.37,2.18 0.97,1.91 0.76,0.22 0.29,1.37 0.52,1.94 0.31,1.44 0.48,2.91 0.5,4.38 0.07,0.67 0.88,0.58 1.19,0.96 -0.06,0.61 0.65,1.43 1.18,0.8 0.34,-0.42 1.1,-0.12 1.48,0.06 -0.19,0.54 0.13,1.08 0.73,0.94 0.45,0.32 -0.03,1.12 0.02,1.58 0.26,0.43 0.87,0.53 0.99,1.06 0.58,0.39 1.43,1.09 2.13,0.73 0.22,-0.52 0.78,-0.22 1.09,0 0.59,0.21 1.53,0.05 1.32,-0.78 -0.01,-0.66 0.68,-0.27 0.9,0.03 0.57,0.28 0.97,-0.69 1.55,-0.21 0.84,0.25 1.11,1.08 1.58,1.67 0.61,0.22 0.16,1.19 0.32,1.69 -0.08,0.68 0.71,0.6 0.85,0.07 0.5,-0.09 1,0.52 0.86,1.04 0.4,0.7 1.5,0.24 2.16,0.27 0.76,-0.24 1.79,-0.22 2.32,-0.85 0.55,-0.82 0.59,-1.89 1.06,-2.69 0.59,-0.47 1.09,-1.17 0.58,-1.84 1.1,-1.12 2.6,-2.01 3.15,-3.6 0.44,-0.46 0.57,-1.04 0.46,-1.65 0.43,-1.24 1.14,-2.4 2.27,-3.1 0.25,-0.19 0.68,-1.23 1.02,-0.66 0.87,0.56 2.4,0.81 2.5,2.07 0.05,0.67 -0.39,0.98 -1.01,0.85 -0.65,0.38 0.05,1.31 0.13,1.87 0.25,0.92 1.4,1.05 1.58,2.03 0.48,0.87 1.65,0.01 2.41,0.12 0.73,-0.31 1.18,0.28 1.5,0.85 0.45,0.56 1.16,1.11 0.82,1.91 -0.09,0.58 0.7,0.95 0.24,1.52 -0.21,0.76 0.9,0.79 1.18,0.23 0.84,-0.71 0.9,-2.01 2.02,-2.43 1.02,-0.06 1.62,-1 1.61,-1.96 -0.09,-1.02 0.58,-2.66 1.85,-2.26 0.39,0.29 1.11,0.3 0.98,-0.35 0.01,-0.41 0.22,-0.99 0.72,-0.64 1.67,0.72 3.33,-0.42 4.67,-1.3 1.07,-1.02 1.17,-2.69 2.2,-3.73 0.24,-1.07 0.13,-2.38 -0.92,-2.98 -0.31,-0.29 0.4,-0.66 0.03,-1.04 -1.08,-1.72 -2.7,-3.09 -3.82,-4.78 -0.93,-0.47 -1.81,1.29 -2.7,0.56 -0.35,-0.84 0.72,-1.72 0.05,-2.53 0.03,-0.72 1.46,-1.61 0.49,-2.23 -0.76,-0.34 -1.61,-0.31 -2.36,-0.72 -0.84,-0.04 -2.06,-0.19 -2.06,-1.31 0.09,-1.22 0.81,-2.32 0.63,-3.6 0.03,-1.74 2.08,-2.69 2.14,-4.38 -0.61,-2.1 -2.81,-3.32 -3.41,-5.34 0.58,-0.82 1.83,-1.33 1.69,-2.56 0.1,-0.89 0.32,-2.26 -0.88,-2.5 -2.33,-0.82 -4.77,-1.84 -7.28,-1.85 z",
					    "department-01" : "m 56.91,0.14 c -0.49,1.07 -1.06,2.16 -1.02,3.38 -0.29,0.72 -1.14,1.22 -0.99,2.1 0.04,1.54 -0.71,2.9 -1.46,4.19 -0.56,0.8 -0.26,1.77 -0.39,2.66 -0.53,1.1 -0.96,2.27 -1.25,3.46 -0.34,0.69 -0.68,1.41 -0.76,2.2 -0.32,0.92 -0.66,1.88 -0.86,2.83 -0.48,0.71 -0.64,1.83 0.18,2.37 0.77,0.4 0.18,1.27 -0.06,1.85 -0.61,0.74 -0.98,1.62 -1.52,2.39 -0.5,0.39 -0.46,1.06 -0.06,1.5 0.47,0.7 -0.16,1.38 -0.6,1.88 -0.22,0.53 0.25,1.08 0.06,1.64 -0.08,1.3 0.72,2.66 0.16,3.91 -0.14,0.54 -1.17,0.78 -0.77,1.42 0.48,0.51 1.26,0.43 1.86,0.28 0.53,0.2 0.57,1.07 1.24,1.04 0.62,0.14 0.49,0.93 0.43,1.38 0.64,0.1 1.17,-0.74 1.83,-0.69 0.2,0.49 0.93,0.38 1.08,0.89 0.68,0.17 0.23,1.17 0.94,1.37 0.32,0.18 0.95,0.26 0.54,0.74 -0.52,0.8 0.71,1.25 0.61,2.05 0.15,0.6 -0.13,1.43 0.33,1.89 0.71,-0.05 1.5,-0.32 2.22,-0.02 0.55,0.17 1.1,-0.37 1.59,-0.02 0.92,0.11 1.74,-0.41 2.67,-0.27 0.5,0.1 1.1,-0.22 1.54,-0.02 0.41,0.36 0.96,-0.22 1.39,0.22 0.65,0.3 1.45,0.29 1.91,0.94 0.59,0.48 0.64,1.6 1.57,1.57 1.01,0.16 1.77,-0.74 2.51,-1.28 0.62,-0.75 1.22,-1.55 1.41,-2.53 0.17,-0.92 0.55,-1.87 1.4,-2.35 0.48,-0.41 0.58,-1.4 1.39,-1.23 0.9,0.71 1.89,1.34 2.73,2.12 0.18,0.4 0.34,0.83 0.78,1.04 0.34,0.28 0.23,0.75 -0.19,0.84 -0.52,0.87 0.49,1.69 0.97,2.32 1,1.09 1.71,2.45 2.87,3.43 0.52,0.35 0.44,1.39 1.22,1.33 0.71,0.05 0.73,0.94 1.34,1.2 0.38,0.18 0.48,0.82 -0.06,0.84 -0.24,-0.19 -0.5,-1.04 -0.84,-0.52 -0.01,0.46 0.15,1.27 0.76,1.2 0.43,0.12 0.74,0.44 0.95,0.81 0.46,0.32 0.94,0.65 0.91,1.28 0.25,0.68 0.51,1.5 1.13,1.93 0.44,-0.01 0.18,-0.66 0.6,-0.8 0.31,-0.32 0.4,-0.95 0.98,-0.82 0.67,0.07 1.4,-0.61 0.93,-1.25 -0.28,-1.01 1.48,-1.4 0.96,-2.46 -0.04,-0.3 -0.43,-0.75 -0.22,-1 0.83,-0.21 1.81,0.29 2.55,-0.17 0.23,-0.53 0.92,-0.89 0.68,-1.57 -0.1,-0.3 -0.02,-0.49 0.27,-0.58 0.35,-1.03 0.08,-2.2 0.23,-3.27 0.04,-0.94 0.14,-1.89 0.62,-2.7 0.38,-1.77 1.24,-3.44 1.41,-5.25 -0.09,-0.5 -0.37,-1 -0.05,-1.49 0.4,-1 0.57,-2.37 -0.43,-3.09 -0.54,-0.85 -0.37,-1.99 -0.41,-2.97 -0.1,-0.67 0.17,-1.29 0.16,-1.93 -0.45,-0.95 0.55,-1.87 0.48,-2.85 0.04,-0.57 0.81,-0.34 0.98,0.04 0.36,0.6 0.97,0.99 1.69,0.84 0.76,0.04 0.52,-0.9 0.34,-1.33 -0.12,-0.5 0.31,-0.92 0.76,-1.04 0.43,-0.38 0.93,-0.62 1.51,-0.47 0.59,-0.03 1.17,-0.3 1.68,-0.54 0.45,-0.65 1.03,-1.31 1.22,-2.08 -0.31,-0.84 -1.39,-1.27 -1.52,-2.16 0.46,-1.01 1.65,-1.39 2.53,-1.92 0.77,-0.34 1.54,-0.91 2.43,-0.75 0.65,-0.13 1.62,-0.15 1.91,-0.86 0.1,-0.77 -0.59,-1.47 -0.57,-2.17 0.86,-1.31 1.26,-2.83 2.04,-4.2 0.38,-0.67 0.56,-1.63 -0.2,-2.13 -1.02,-0.79 -1.96,-1.85 -3.23,-2.19 -1.24,0.28 -1.52,1.75 -2.47,2.44 -0.78,0.67 -1.68,1.24 -2.11,2.22 -0.55,0.76 -0.82,1.83 -1.57,2.41 -0.35,-0.05 -0.85,-0.16 -0.88,0.36 -0.08,0.59 -0.21,1.51 -1.01,1.42 -0.67,0.18 -0.84,1.24 -1.61,1.09 -0.38,0.17 -0.68,0.53 -1.16,0.4 -1.51,-0.11 -3.04,-0.61 -4.55,-0.15 -0.38,0.12 -0.87,0.13 -0.89,-0.38 -0.29,-0.81 0.26,-1.94 -0.49,-2.55 -0.43,-0.18 -1.02,0 -1.23,-0.54 -0.34,-0.55 -1.09,-0.46 -1.57,-0.68 0.09,-0.27 0.04,-1.01 -0.38,-0.66 -0.41,0.49 -1.35,0.53 -1.34,1.34 -0.16,0.82 -0.74,1.73 -1.69,1.61 -0.51,0.16 -0.58,0.81 -1.05,1.08 -0.87,0.95 -2.33,0.62 -3.46,0.56 -0.69,-0.22 -0.94,-1.11 -0.62,-1.7 0.37,-0.42 0.73,-1.18 0.42,-1.72 -0.48,-0.44 -1.2,0.65 -1.54,-0.03 -0.31,-0.43 -0.18,-1.34 -0.72,-1.46 -0.36,0.59 -0.05,1.57 -0.57,2.07 -0.32,-0.18 -0.19,-0.8 -0.26,-1.15 0.16,-0.95 -1.12,-1.1 -1.29,-1.87 0.08,-0.45 -0.32,-0.75 -0.49,-1.07 0.23,-0.37 0.9,-0.78 0.19,-1.1 -0.64,-0.72 -1.67,-0.69 -2.4,-1.29 -0.13,-0.15 -0.65,-0.32 -0.57,-0.51 0.4,-0.14 0.21,-0.68 0.62,-0.81 0.26,-0.57 -0.25,-1.41 -0.93,-1.26 -0.86,-0.03 -1.68,-0.3 -2.41,-0.74 -0.52,-0.02 -0.79,-0.58 -1.25,-0.74 -0.08,-0.44 -0.3,-0.89 -0.39,-1.33 0.01,-0.41 -0.32,-0.72 -0.38,-1.11 -0.29,-0.26 -0.75,-0.17 -1.08,-0.38 -0.41,0.01 -0.53,0.67 -1.02,0.4 -0.32,-0.1 -0.68,-0.03 -0.8,0.28 -0.5,0.18 -0.93,0.78 -1.5,0.43 -0.8,-0.19 -1.31,0.88 -2.13,0.68 -0.9,-0.34 -1.77,-0.82 -2.38,-1.57 -0.6,-0.4 -1.52,-0.56 -1.94,0.14 -0.43,0.35 -0.8,-0.21 -0.95,-0.54 -0.04,-0.06 -0.12,0.01 -0.17,0.02 z"
					}
				}
			}
		}
	);

	return $.fn.mapael;

}));