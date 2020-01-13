function FindProxyForURL(url, host)
{
  if (shExpMatch(host, "stash.adeo.no") ||
      shExpMatch(host, "repo.adeo.no") ||
      shExpMatch(host, "vault.adeo.no") ||
      shExpMatch(host, "vault-dev.adeo.no") ||
      shExpMatch(host, "apiserver.*.nais.io") ||
      shExpMatch(host, "vera.adeo.no") ||
      shExpMatch(host, "jenkins*.adeo.no") ||
      shExpMatch(host, "*jenkins.adeo.no")) {
    return "SOCKS localhost:14122";
  } else if (shExpMatch(host, "*.dev-gcp.nais.io") ||
      shExpMatch(host, "*.dev-nav.no") ||
      shExpMatch(host, "*.dev-adeo.no")) {
    return "SOCKS localhost:14134";
  } else if (shExpMatch(host, "*.prod-gcp.nais.io") ||
      shExpMatch(host, "basta-frontend.adeo.no")) {
    return "SOCKS localhost:14135";
  } else if (shExpMatch(host, "sentry.navtunnel") ||
      shExpMatch(host, "sentry-proxy.navtunnel")) {
    return "SOCKS localhost:14136";
  } else if (shExpMatch(url, 'https://isso-q.adeo.no:443/isso') ||
      shExpMatch(url, 'https://isso-q.adeo.no:443/isso/oauth2/connect/jwk_uri') ||
      shExpMatch(url, 'https://isso-q.adeo.no:443/isso/oauth2') ||
      shExpMatch(url, 'https://security-token-service.nais.preprod.local/rest/v1/sts/token') ||
      shExpMatch(url, 'https://sts-q2.preprod.local/SecurityTokenServiceProvider/') ||
      shExpMatch(url, 'https://wasapp-q2.adeo.no/tpsws/*') ||
      shExpMatch(url, 'https://wasapp-q2.adeo.no/nav-gsak-ws/*') ||
      shExpMatch(url, 'https://tjenestebuss-q2.adeo.no/*') ||
      shExpMatch(url, 'https://app-q2.adeo.no/norg2/*') ||
      shExpMatch(url, 'https://app-q2.adeo.no/medl2/*') ||
      shExpMatch(url, 'https://arena-q2.adeo.no/ail_ws/*') ||
      shExpMatch(url, 'https://app-q2.adeo.no/aktoerregister/*') ||
      shExpMatch(url, 'https://modapp-q2.adeo.no/henvendelse/services/domene.Virksomhet/Dialog_v1') ||
      shExpMatch(url, 'https://wasapp-q2.adeo.no/tpsws/ws/BehandlePerson/v1') ||
      shExpMatch(url, 'https://modapp-q2.adeo.no/ereg/api') ||
      shExpMatch(url, 'https://pep-gw-q2.oera-q.local:9443/ekstern/udi/personstatus/v1 ') ||
      shExpMatch(url, 'https://arena-q2.adeo.no/ail_ws/Notat_v1') ||
      shExpMatch(url, 'https://modapp-q2.adeo.no/ereg/ws/OrganisasjonService/v4') ||
      shExpMatch(url, 'https://service-gw-q2.preprod.local/') ||
      shExpMatch(url, 'https://sak-q2.nais.preprod.local/api/v1/saker') ||
      shExpMatch(url, 'https://saf-q2.nais.preprod.local/graphql') ||
      shExpMatch(url, 'https://oppgave-q2.nais.preprod.local/api/v1/oppgaver') ||
      shExpMatch(url, 'https://saf-q2.nais.preprod.local/rest/hentdokument') ||
      shExpMatch(url, 'https://dokarkiv-q2.nais.preprod.local/rest/journalpostapi/v1') ||
      shExpMatch(url, 'https://dokarkiv-q2.nais.preprod.local/services/journal/v3') ||
      shExpMatch(url, 'https://dokprod-q2.nais.preprod.local/dokprod/ws/dokumentproduksjon/v3') ||
      shExpMatch(url, 'https://dokmot-q2.nais.preprod.local/ws/BehandleForsendelse/v1') ||
      shExpMatch(url, 'https://person-oppslag.nais.preprod.local/api/v1/oppslag') ||
      shExpMatch(url, 'https://person-forvalter.nais.preprod.local/endreperson') ||
      shExpMatch(url, 'https://person-mottak.nais.preprod.local/api/v1') ||
      shExpMatch(url, 'https://axsys.nais.preprod.local/api') ||
      shExpMatch(url, 'https://arbeidsfordeling-facade-q2.nais.preprod.local/api/v1/arbeidsfordeling') ||
      shExpMatch(url, 'https://kodeverk.nais.preprod.local/api') ||
      shExpMatch(url, 'https://dokumentinfo.nais.preprod.local') ||
      shExpMatch(url, 'https://kodeverksmapper.nais.preprod.local') ||
      shExpMatch(url, 'https://fpsak-q1.nais.preprod.local/fpsak/tjenester/sak/opprettSak/v1') ||
      shExpMatch(url, 'https://fpsak-q1.nais.preprod.local/fpsak/tjenester/sak/finnSak/v1') ||
      shExpMatch(url, 'https://arena-q1.adeo.no/ail_ws/BehandleArbeidOgAktivitetOppgave_v1')) {
        return "SOCKS localhost:14138";
      }

  return "DIRECT";
}
