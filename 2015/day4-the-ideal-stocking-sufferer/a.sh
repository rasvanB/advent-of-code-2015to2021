#!/bin/bash
VAR="iwrupvqb"
I=0
HASH=`md5sum <<< ${VAR}${I}`
while [[ $HASH != "00000"* ]]
do
  ((I=I+1))
  HASH=`md5sum <<< ${VAR}${I}`
done
echo ${I}
