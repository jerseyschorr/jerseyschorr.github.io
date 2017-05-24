### Performance Monitoring

`bash /app/jmeteragent/startAgent.sh  < /dev/null &`

`jmeter -n -t test_plan.jmx`

### Bash Scripting
```
#!/usr/bin/env bash
set -ETeu -o pipefail
```

### Quick and Dirty webserver
`python -m SimpleHTTPServer 8888`
