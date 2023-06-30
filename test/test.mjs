import { chai } from 'environment-safe-chai';
import { getPackage } from '../environment-safe-package.mjs';
import { valid as validSemver } from 'semver'
const should = chai.should();

describe('environment-safe-package.json', ()=>{
   describe('performs a simple test suite', ()=>{
        it('load it\'s own package.json', async ()=>{
            const pkg = await getPackage();
            pkg.name.should.equal('environment-safe-package');
            (typeof validSemver(pkg.version) === 'string').should.equal(true);
            should.exist(pkg.dependencies);
            should.exist(pkg.devDependencies);
        });
    });
});
