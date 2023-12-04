"""empty message

Revision ID: d280193383f7
Revises: 2712de28cc7b
Create Date: 2022-11-16 21:05:05.143506

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd280193383f7'
down_revision = '2712de28cc7b'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_index(op.f('ix_account_data_tbl_id'), 'account_data_tbl', ['id'], unique=False)
    op.create_index(op.f('ix_password_data_tbl_id'), 'password_data_tbl', ['id'], unique=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_password_data_tbl_id'), table_name='password_data_tbl')
    op.drop_index(op.f('ix_account_data_tbl_id'), table_name='account_data_tbl')
    # ### end Alembic commands ###