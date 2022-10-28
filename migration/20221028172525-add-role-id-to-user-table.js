const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class addRoleIdToUserTable20221028172525 {

    async up(queryRunner) {
        await queryRunner.query(
            `alter table \`user\` 
            add role_id char(36) not null,
            add constraint \`fk_user_role\` foreign key (\`role_id\`) references \`role\` (\`id\`) on update cascade on delete restrict ;`,);
    }

    async down(queryRunner) {
        await queryRunner.query(
            `alter table \`user\` 
            drop constraint \`fk_user_role\`,
            drop \`role_id\`;
            `);
    }

}
