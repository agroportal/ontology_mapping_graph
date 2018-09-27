function defineMatches(){nodes = [
    {id: 1,  value: 3588,  label: 'ONTOBIOTOPE-51' },
    {id: 2,  value: 161,  label: 'pr' },
    {id: 3,  value: 314868,  label: 'PR' },
    {id: 4,  value: 8511,  label: 'ENVO' },
    {id: 5,  value: 3025,  label: 'PECO' },
    {id: 6,  value: 19,  label: 'ehdaa2' },
    {id: 7,  value: 1938,  label: 'http://eurovoc.europa.eu' },
    {id: 8,  value: 97,  label: 'peco' },
    {id: 9,  value: 7,  label: 'GEMET' },
    {id: 10,  value: 74,  label: 'pato' },
    {id: 11,  value: 206,  label: 'http://sws.geonames.org' },
    {id: 12,  value: 864,  label: 'TOP' },
    {id: 13,  value: 40,  label: 'http://purl.bioontology.org/ontology/efo' },
    {id: 14,  value: 40,  label: 'vhog' },
    {id: 15,  value: 370,  label: 'GENO' },
    {id: 16,  value: 33639,  label: 'oma' },
    {id: 17,  value: 995,  label: 'chebi' },
    {id: 18,  value: 366,  label: 'http://purl.obolibrary.org/obo/ncbitaxon' },
    {id: 19,  value: 629,  label: 'http://opendata.inra.fr/eol' },
    {id: 20,  value: 27094,  label: 'FOODON' },
    {id: 21,  value: 527,  label: 'http://www.yso.fi/onto/afo' },
    {id: 22,  value: 35,  label: 'http://www.cabi.org/cabthesaurus' },
    {id: 23,  value: 2096,  label: 'ATOL' },
    {id: 24,  value: 1966,  label: 'http://purl.org/bncf/tid' },
    {id: 25,  value: 945,  label: 'http://purl.obolibrary.org/obo/po' },
    {id: 26,  value: 65,  label: 'omp' },
    {id: 27,  value: 2,  label: 'ANAEETHES' },
    {id: 28,  value: 827,  label: 'http://lod.gesis.org/thesoz' },
    {id: 29,  value: 1282,  label: 'langual' },
    {id: 30,  value: 793,  label: 'http://aims.fao.org/aos/biotechglossary' },
    {id: 31,  value: 135,  label: 'bto' },
    {id: 32,  value: 1220,  label: 'so' },
    {id: 33,  value: 2433,  label: 'SO' },
    {id: 34,  value: 46,  label: 'uberon' },
    {id: 35,  value: 17,  label: 'hpo' },
    {id: 36,  value: 1625,  label: 'rhea' },
    {id: 37,  value: 303,  label: 'cl' },
    {id: 38,  value: 6635,  label: 'CL' },
    {id: 39,  value: 23,  label: 'mro' },
    {id: 40,  value: 443,  label: 'vto' },
    {id: 41,  value: 1385,  label: 'http://linkeddata.ge.imati.cnr.it:2020' },
    {id: 42,  value: 162,  label: 'fma' },
    {id: 43,  value: 5094,  label: 'TO' },
    {id: 44,  value: 2213,  label: 'SOY' },
    {id: 45,  value: 151,  label: 'atol' },
    {id: 46,  value: 342,  label: 'http://purl.bioontology.org/ontology/sep' },
    {id: 47,  value: 1186,  label: 'http://www.eionet.europa.eu/gemet' },
    {id: 48,  value: 115,  label: 'ncbi_taxid' },
    {id: 49,  value: 39,  label: 'eco' },
    {id: 50,  value: 32,  label: 'ma' },
    {id: 51,  value: 4039,  label: 'http://www.yso.fi/onto/yso' },
    {id: 52,  value: 435,  label: 'soy' },
    {id: 53,  value: 17,  label: 'mi' },
    {id: 54,  value: 5638,  label: 'ec' },
    {id: 55,  value: 1125,  label: 'http://zbw.eu/stw' },
    {id: 56,  value: 1086,  label: 'http://id.loc.gov' },
    {id: 57,  value: 46,  label: 'AGROVOC' },
    {id: 58,  value: 25,  label: 'tao' },
    {id: 59,  value: 683,  label: 'mp' },
    {id: 60,  value: 1782,  label: 'http://aims.fao.org/aos/asfa' },
    {id: 61,  value: 16,  label: 'xao' },
    {id: 62,  value: 5,  label: 'BIODIVTHES' },
    {id: 63,  value: 562,  label: 'EO' },
    {id: 64,  value: 17,  label: 'http://purl.bioontology.org/ontology/pato' },
    {id: 65,  value: 103,  label: 'zfa' },
    {id: 66,  value: 3483,  label: 'http://data.uba.de/umt' },
    {id: 67,  value: 447,  label: 'VARIO' },
    {id: 68,  value: 6212,  label: 'http://d-nb.info/gnd' },
    {id: 69,  value: 52,  label: 'uniprot' },
    {id: 70,  value: 3299,  label: 'VT' },
    {id: 71,  value: 442,  label: 'SPTO' },
    {id: 72,  value: 25,  label: 'hgnc' },
    {id: 73,  value: 563,  label: 'http://purl.obolibrary.org/obo/pato' },
    {id: 74,  value: 7,  label: 'AFO' },
    {id: 75,  value: 22047,  label: 'EFO' },
    {id: 76,  value: 11011,  label: 'http://dbpedia.org' },
    {id: 77,  value: 13773,  label: 'http://id.cabi.org/cabt' },
    {id: 78,  value: 21,  label: 'co_125' },
    {id: 79,  value: 14249,  label: 'http://lod.nal.usda.gov/nalt' },
    {id: 80,  value: 3475,  label: 'PO2_DG' },
    {id: 81,  value: 540,  label: 'http://www.wikidata.org/entity' },
    {id: 82,  value: 140,  label: 'mesh' },
    {id: 83,  value: 13,  label: 'http://id.agrisemantics.org/gacs' },
    {id: 84,  value: 170162,  label: 'uniprotkb' },
    {id: 85,  value: 629,  label: 'EOL' },
    {id: 86,  value: 423,  label: 'http://purl.obolibrary.org/obo/chebi' },
    {id: 87,  value: 207,  label: 'gro' },
    {id: 88,  value: 39,  label: 'go' },
    {id: 89,  value: 49698,  label: 'GO' },
    {id: 90,  value: 12,  label: 'GACS' },
    {id: 91,  value: 20699,  label: 'http://cat.aii.caas.cn' },
    {id: 92,  value: 2096,  label: 'http://opendata.inra.fr/atol' },
    {id: 93,  value: 28665,  label: 'FLOPO' },
    {id: 94,  value: 1685,  label: 'AGRO' },
    {id: 95,  value: 11274,  label: 'http://aims.fao.org/aos/agrovoc' },
    {id: 96,  value: 420,  label: 'po' },
    {id: 97,  value: 2002,  label: 'PO' }
];edges = [
    {from: 97, to: 78, value: 21, title: '21 matches from PO to co_125'},
    {from: 97, to: 88, value: 14, title: '14 matches from PO to go'},
    {from: 12, to: 46, value: 342, title: '342 matches from TOP to http://purl.bioontology.org/ontology/sep'},
    {from: 63, to: 96, value: 88, title: '88 matches from EO to po'},
    {from: 97, to: 87, value: 201, title: '201 matches from PO to gro'},
    {from: 9, to: 66, value: 3483, title: '3483 matches from GEMET to http://data.uba.de/umt'},
    {from: 80, to: 95, value: 3164, title: '3164 matches from PO2_DG to http://aims.fao.org/aos/agrovoc'},
    {from: 70, to: 88, value: 31, title: '31 matches from VT to go'},
    {from: 38, to: 88, value: 31, title: '31 matches from CL to go'},
    {from: 75, to: 50, value: 32, title: '32 matches from EFO to ma'},
    {from: 20, to: 29, value: 1282, title: '1282 matches from FOODON to langual'},
    {from: 70, to: 40, value: 443, title: '443 matches from VT to vto'},
    {from: 57, to: 7, value: 1276, title: '1276 matches from AGROVOC to http://eurovoc.europa.eu'},
    {from: 57, to: 56, value: 1086, title: '1086 matches from AGROVOC to http://id.loc.gov'},
    {from: 12, to: 25, value: 945, title: '945 matches from TOP to http://purl.obolibrary.org/obo/po'},
    {from: 75, to: 59, value: 15, title: '15 matches from EFO to mp'},
    {from: 71, to: 10, value: 23, title: '23 matches from SPTO to pato'},
    {from: 3, to: 84, value: 170162, title: '170162 matches from PR to uniprotkb'},
    {from: 67, to: 53, value: 17, title: '17 matches from VARIO to mi'},
    {from: 63, to: 48, value: 115, title: '115 matches from EO to ncbi_taxid'},
    {from: 44, to: 52, value: 435, title: '435 matches from SOY to soy'},
    {from: 57, to: 55, value: 1125, title: '1125 matches from AGROVOC to http://zbw.eu/stw'},
    {from: 57, to: 11, value: 206, title: '206 matches from AGROVOC to http://sws.geonames.org'},
    {from: 9, to: 7, value: 1938, title: '1938 matches from GEMET to http://eurovoc.europa.eu'},
    {from: 9, to: 76, value: 3006, title: '3006 matches from GEMET to http://dbpedia.org'},
    {from: 57, to: 76, value: 11011, title: '11011 matches from AGROVOC to http://dbpedia.org'},
    {from: 85, to: 19, value: 629, title: '629 matches from EOL to http://opendata.inra.fr/eol'},
    {from: 70, to: 82, value: 140, title: '140 matches from VT to mesh'},
    {from: 43, to: 78, value: 21, title: '21 matches from TO to co_125'},
    {from: 80, to: 60, value: 11, title: '11 matches from PO2_DG to http://aims.fao.org/aos/asfa'},
    {from: 57, to: 30, value: 793, title: '793 matches from AGROVOC to http://aims.fao.org/aos/biotechglossary'},
    {from: 57, to: 79, value: 14249, title: '14249 matches from AGROVOC to http://lod.nal.usda.gov/nalt'},
    {from: 62, to: 95, value: 249, title: '249 matches from BIODIVTHES to http://aims.fao.org/aos/agrovoc'},
    {from: 43, to: 87, value: 201, title: '201 matches from TO to gro'},
    {from: 43, to: 48, value: 28, title: '28 matches from TO to ncbi_taxid'},
    {from: 75, to: 42, value: 159, title: '159 matches from EFO to fma'},
    {from: 12, to: 64, value: 17, title: '17 matches from TOP to http://purl.bioontology.org/ontology/pato'},
    {from: 89, to: 50, value: 23, title: '23 matches from GO to ma'},
    {from: 57, to: 28, value: 827, title: '827 matches from AGROVOC to http://lod.gesis.org/thesoz'},
    {from: 38, to: 82, value: 123, title: '123 matches from CL to mesh'},
    {from: 89, to: 32, value: 15, title: '15 matches from GO to so'},
    {from: 75, to: 35, value: 17, title: '17 matches from EFO to hpo'},
    {from: 27, to: 47, value: 284, title: '284 matches from ANAEETHES to http://www.eionet.europa.eu/gemet'},
    {from: 89, to: 72, value: 25, title: '25 matches from GO to hgnc'},
    {from: 74, to: 21, value: 527, title: '527 matches from AFO to http://www.yso.fi/onto/afo'},
    {from: 89, to: 37, value: 303, title: '303 matches from GO to cl'},
    {from: 57, to: 24, value: 1966, title: '1966 matches from AGROVOC to http://purl.org/bncf/tid'},
    {from: 75, to: 31, value: 135, title: '135 matches from EFO to bto'},
    {from: 57, to: 47, value: 1186, title: '1186 matches from AGROVOC to http://www.eionet.europa.eu/gemet'},
    {from: 90, to: 79, value: 13088, title: '13088 matches from GACS to http://lod.nal.usda.gov/nalt'},
    {from: 43, to: 54, value: 23, title: '23 matches from TO to ec'},
    {from: 57, to: 91, value: 20699, title: '20699 matches from AGROVOC to http://cat.aii.caas.cn'},
    {from: 70, to: 45, value: 151, title: '151 matches from VT to atol'},
    {from: 38, to: 31, value: 61, title: '61 matches from CL to bto'},
    {from: 43, to: 88, value: 37, title: '37 matches from TO to go'},
    {from: 43, to: 52, value: 90, title: '90 matches from TO to soy'},
    {from: 44, to: 96, value: 77, title: '77 matches from SOY to po'},
    {from: 89, to: 36, value: 1625, title: '1625 matches from GO to rhea'},
    {from: 5, to: 8, value: 97, title: '97 matches from PECO to peco'},
    {from: 38, to: 37, value: 21, title: '21 matches from CL to cl'},
    {from: 3, to: 16, value: 33639, title: '33639 matches from PR to oma'},
    {from: 70, to: 37, value: 92, title: '92 matches from VT to cl'},
    {from: 90, to: 81, value: 540, title: '540 matches from GACS to http://www.wikidata.org/entity'},
    {from: 44, to: 88, value: 23, title: '23 matches from SOY to go'},
    {from: 75, to: 65, value: 103, title: '103 matches from EFO to zfa'},
    {from: 93, to: 10, value: 74, title: '74 matches from FLOPO to pato'},
    {from: 93, to: 87, value: 207, title: '207 matches from FLOPO to gro'},
    {from: 43, to: 96, value: 420, title: '420 matches from TO to po'},
    {from: 9, to: 95, value: 1199, title: '1199 matches from GEMET to http://aims.fao.org/aos/agrovoc'},
    {from: 33, to: 32, value: 1220, title: '1220 matches from SO to so'},
    {from: 5, to: 48, value: 115, title: '115 matches from PECO to ncbi_taxid'},
    {from: 38, to: 42, value: 162, title: '162 matches from CL to fma'},
    {from: 75, to: 61, value: 16, title: '16 matches from EFO to xao'},
    {from: 3, to: 39, value: 23, title: '23 matches from PR to mro'},
    {from: 27, to: 95, value: 403, title: '403 matches from ANAEETHES to http://aims.fao.org/aos/agrovoc'},
    {from: 89, to: 54, value: 5638, title: '5638 matches from GO to ec'},
    {from: 1, to: 26, value: 65, title: '65 matches from ONTOBIOTOPE-51 to omp'},
    {from: 57, to: 22, value: 35, title: '35 matches from AGROVOC to http://www.cabi.org/cabthesaurus'},
    {from: 71, to: 96, value: 85, title: '85 matches from SPTO to po'},
    {from: 75, to: 58, value: 25, title: '25 matches from EFO to tao'},
    {from: 89, to: 59, value: 11, title: '11 matches from GO to mp'},
    {from: 5, to: 17, value: 40, title: '40 matches from PECO to chebi'},
    {from: 89, to: 17, value: 995, title: '995 matches from GO to chebi'},
    {from: 97, to: 52, value: 88, title: '88 matches from PO to soy'},
    {from: 75, to: 82, value: 11, title: '11 matches from EFO to mesh'},
    {from: 12, to: 13, value: 40, title: '40 matches from TOP to http://purl.bioontology.org/ontology/efo'},
    {from: 12, to: 73, value: 563, title: '563 matches from TOP to http://purl.obolibrary.org/obo/pato'},
    {from: 90, to: 95, value: 11274, title: '11274 matches from GACS to http://aims.fao.org/aos/agrovoc'},
    {from: 3, to: 49, value: 39, title: '39 matches from PR to eco'},
    {from: 89, to: 65, value: 18, title: '18 matches from GO to zfa'},
    {from: 43, to: 10, value: 31, title: '31 matches from TO to pato'},
    {from: 23, to: 92, value: 2096, title: '2096 matches from ATOL to http://opendata.inra.fr/atol'},
    {from: 89, to: 96, value: 56, title: '56 matches from GO to po'},
    {from: 1, to: 88, value: 38, title: '38 matches from ONTOBIOTOPE-51 to go'},
    {from: 75, to: 14, value: 40, title: '40 matches from EFO to vhog'},
    {from: 70, to: 59, value: 683, title: '683 matches from VT to mp'},
    {from: 89, to: 2, value: 161, title: '161 matches from GO to pr'},
    {from: 75, to: 6, value: 19, title: '19 matches from EFO to ehdaa2'},
    {from: 93, to: 52, value: 88, title: '88 matches from FLOPO to soy'},
    {from: 74, to: 51, value: 4039, title: '4039 matches from AFO to http://www.yso.fi/onto/yso'},
    {from: 93, to: 88, value: 15, title: '15 matches from FLOPO to go'},
    {from: 38, to: 59, value: 38, title: '38 matches from CL to mp'},
    {from: 57, to: 60, value: 1782, title: '1782 matches from AGROVOC to http://aims.fao.org/aos/asfa'},
    {from: 75, to: 88, value: 39, title: '39 matches from EFO to go'},
    {from: 80, to: 79, value: 36, title: '36 matches from PO2_DG to http://lod.nal.usda.gov/nalt'},
    {from: 90, to: 77, value: 13773, title: '13773 matches from GACS to http://id.cabi.org/cabt'},
    {from: 20, to: 18, value: 366, title: '366 matches from FOODON to http://purl.obolibrary.org/obo/ncbitaxon'},
    {from: 80, to: 91, value: 24, title: '24 matches from PO2_DG to http://cat.aii.caas.cn'},
    {from: 33, to: 69, value: 52, title: '52 matches from SO to uniprot'},
    {from: 80, to: 68, value: 20, title: '20 matches from PO2_DG to http://d-nb.info/gnd'},
    {from: 57, to: 68, value: 6212, title: '6212 matches from AGROVOC to http://d-nb.info/gnd'},
    {from: 80, to: 83, value: 13, title: '13 matches from PO2_DG to http://id.agrisemantics.org/gacs'},
    {from: 89, to: 88, value: 35, title: '35 matches from GO to go'},
    {from: 43, to: 8, value: 24, title: '24 matches from TO to peco'},
    {from: 12, to: 86, value: 423, title: '423 matches from TOP to http://purl.obolibrary.org/obo/chebi'},
    {from: 89, to: 34, value: 46, title: '46 matches from GO to uberon'},
    {from: 63, to: 17, value: 40, title: '40 matches from EO to chebi'},
    {from: 57, to: 41, value: 1385, title: '1385 matches from AGROVOC to http://linkeddata.ge.imati.cnr.it:2020'},
    {from: 93, to: 78, value: 21, title: '21 matches from FLOPO to co_125'}
];}