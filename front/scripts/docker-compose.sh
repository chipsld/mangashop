#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail
if [[ "${TRACE-0}" == "1" ]]; then
  set -o xtrace
fi

if [[ "${1-}" =~ ^-*h(elp)?$ ]] || [[ $# -lt 1 ]]; then
  echo 'Usage: ./docker-compose.sh [jenkins|staging|production] compose_command

Easily manipulate docker containers with compose based on the environment provided

'
  exit
fi

cd "$(dirname "$0")"

[[ -f ../VERSION ]] && VERSION=$(cat ../VERSION) || VERSION=$(git rev-parse --short HEAD)

BUILD_ENV=$1 && shift
COMPOSE_OVERRIDE="../docker-compose.$BUILD_ENV.yml"

export VERSION BUILD_ENV

main() {
  docker compose --file ../docker-compose.yml --file "$COMPOSE_OVERRIDE" "$@"
}

main "$@"
