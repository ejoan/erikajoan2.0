from fabric.api import (
    cd,
    env,
    task,
    run,
)


env.user = 'erika'
env.release_dir = '/home/erika/erikajoan.com'
env.hosts = ['107.170.129.199']


@task
def deploy():
    with cd(env.release_dir):
        run('git pull -p')
        run('git checkout master')
