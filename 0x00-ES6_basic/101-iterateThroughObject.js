export default function iterateThroughObject(reportWithIterator) {
  const report = [];
  for (const item of reportWithIterator) {
    report.push(item);
  }
  return report.reduce((prev, next) => `${prev} | ${next}`);
}
