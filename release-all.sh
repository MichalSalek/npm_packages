#! /usr/bin/bash

cd ./controllers && yarn release:patch && cd .. &&

cd ./email && yarn release:patch && cd .. &&

cd ./socket && yarn release:patch && cd .. &&

cd ./utils && yarn release:patch && cd .. &&

cd ./workers && yarn release:patch && cd .. &&


echo "All done - patch version of all packages was dumped. Exiting."
exit
